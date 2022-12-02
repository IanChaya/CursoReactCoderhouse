import React from "react";
import { useContext } from "react";
import { cartContext } from "./CartContextComponent";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const borderBottom = { borderBottom: "solid #282c34 1px" };

export default function Cart() {
  const { cart, totalCont, totalToPay, deleteFromCart } = useContext(cartContext);

  return (
    <>
      {totalCont > 0 ? (
        <div>
          <h1 style={borderBottom}>Tu pedido:</h1>
          {cart.map((item) => (
            <div key={item.id} style={borderBottom}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
                <img src={item.pictureURL} alt="" style={{ height: "150px" }} />
                <span>{"Cantidad:   " + item.cont} </span>
                <span>{"Producto:   " + item.name} </span>
                <span style={{ cursor: "pointer" }} onClick={() => deleteFromCart(item.id)}>
                  🗑️
                </span>
              </div>
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "end", marginRight: "15px" }}>
            {" "}
            Total de Productos: {totalCont}{" "}
          </div>
          <div style={{ display: "flex", justifyContent: "end", marginRight: "15px" }}>
            {" "}
            Total a pagar: US$ {totalToPay}{" "}
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link to="/checkout">
              <Button disabled={cart.length == 0} variant="contained">
                Comprar
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <h1 style={{ display: "flex", justifyContent: "center", minHeight: "50vh" }}>No hay productos para mostrar</h1>
      )}
    </>
  );
}
