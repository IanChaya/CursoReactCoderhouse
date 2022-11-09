import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";

export default function ItemCounter({ stock, initial, AddCart }) {
  const [cont, setCont] = useState(parseInt(initial));
  const sumar = () => {
    setCont(cont + 1);
  };
  const restar = () => {
    setCont(cont - 1);
  };

  useEffect(() => {
    setCont(parseInt(initial));
  }, [initial]);

  return (
    <div>
      <Button disabled={cont <= 0} sx={{ background: "#ddd", margin: 1, color: "black" }} onClick={restar}>
        -
      </Button>
      <span>{cont}</span>
      <Button disabled={cont >= stock} sx={{ background: "#ddd", margin: 1, color: "black" }} onClick={sumar}>
        +
      </Button>
      <Button
        disabled={cont >= stock || cont <= 0}
        sx={{ background: "#ddd", fontSize: "15px", color: "black" }}
        onClick={() => AddCart(cont)}
      >
        Agregar al Carrito
      </Button>
    </div>
  );
}
