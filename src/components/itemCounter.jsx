import { Button } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import CartContextComponent, { cartContext } from "./CartContextComponent";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ItemCounter({ product }) {
  const [cont, setCont] = useState(1);
  const [removeButton, setRemoveButton] = useState(false);

  const { cart, addToCart } = useContext(cartContext);

  const notify = () => {
    toast.success("Se agregó el producto", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const sumar = () => {
    if (cont < product.stock) {
      setCont(cont + 1);
    }
  };
  const restar = () => {
    setCont(cont - 1);
  };

  function onAdd() {
    addToCart(product, cont);
    setRemoveButton(true);
    notify();
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div>
      <Button disabled={cont <= 0} sx={{ background: "#ddd", margin: 1, color: "black" }} onClick={restar}>
        -
      </Button>
      <br />
      <Button sx={{ background: "white", margin: 1, color: "black" }}>{cont}</Button>
      <span sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}></span>
      <br />
      <Button disabled={cont >= product.stock} sx={{ background: "#ddd", margin: 1, color: "black" }} onClick={sumar}>
        +
      </Button>
      <br />

      {removeButton ? (
        <>
          <Link to="/">
            <Button size="small" variant="outlined">
              Volver a la tienda
            </Button>
          </Link>
          <br />
          <br />
          <Link to="/checkout">
            <Button variant="contained" color="success">
              Finalizar Compra
            </Button>
          </Link>
        </>
      ) : (
        <Button
          disabled={cont > product.stock || cont <= 0}
          sx={{ background: "#8cd3a3", fontSize: "12px", color: "black" }}
          onClick={onAdd}
        >
          Añadir al 🛒
        </Button>
      )}
      <ToastContainer />
    </div>
  );
}
