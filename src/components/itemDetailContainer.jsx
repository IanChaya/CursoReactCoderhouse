import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { iditem } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, "products", iditem);

    getDoc(refDoc).then((item) => {
      const aux = { ...item.data(), id: item.id };

      console.log(aux);

      setProduct(aux);
    });
  }, [iditem]);

  return <ItemDetail product={product} />;
}
