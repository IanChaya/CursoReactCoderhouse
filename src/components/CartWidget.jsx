import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { cartContext } from "./CartContextComponent";

export default function CartWidget() {
  const { totalCont } = useContext(cartContext);
  return (
    <div>
      <ShoppingCartIcon /> {totalCont}
    </div>
  );
}
