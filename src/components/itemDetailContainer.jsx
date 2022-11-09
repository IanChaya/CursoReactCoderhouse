import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productosHC } from "../data/data";
import ItemDetail from "./ItemDetail";

export default function ItemListContainer({ greeting }) {
  const { iditem } = useParams();

  const [producto, setProducto] = useState({});

  useEffect(() => {
    const productoPromise = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosHC.find((item) => item.id == iditem));
      }, 2000);
    });

    productoPromise.then((res) => {
      setProducto(res);
    });
  }, [iditem]);

  return (
    <div sx={{ alignContent: "center" }}>
      <ItemDetail producto={producto} />
    </div>
  );
}
