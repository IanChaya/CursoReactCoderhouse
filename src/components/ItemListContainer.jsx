import React, { useEffect } from "react";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();
  console.log(idCategory);

  useEffect(() => {
    const db = getFirestore();
    let myCollection;

    if (idCategory == undefined) {
      myCollection = collection(db, "products");
    } else {
      myCollection = query(collection(db, "products"), where("idCategory", "==", idCategory));
    }

    getDocs(myCollection).then((data) => {
      const auxProducts = data.docs.map((product) => ({ ...product.data(), id: product.id }));

      setProducts(auxProducts);
    });
  }, [idCategory]);

  return <ItemList products={products} />;
}
