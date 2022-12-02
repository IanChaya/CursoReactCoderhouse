import React from "react";
import { createContext, useState } from "react";
import { useEffect } from "react";

export const cartContext = createContext();

export default function CartContextComponent({ children }) {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [totalCont, setTotalCont] = useState(0);
  const [totalToPay, setTotalToPay] = useState(0);

  function addToCart(item, cont) {
    const cartAux = [...cart];

    let foundInCart = false;

    for (let i = 0; i < cartAux.length; i++) {
      if (cartAux[i].id == item.id) {
        cartAux[i].cont = cartAux[i].cont + cont;
        foundInCart = true;
      }
    }
    if (!foundInCart) {
      cartAux.push({ ...item, cont });
    }

    setCart(cartAux);
  }

  function deleteFromCart(id) {
    setCart(cart.filter((item) => item.id != id));
  }

  function deleteAllFromCart() {
    setCart([]);
  }

  useEffect(() => {
    setTotalCont(cart.reduce((acc, item) => acc + item.cont, 0));
    setTotalToPay(cart.reduce((acc, item) => acc + item.cont * item.price, 0));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <cartContext.Provider value={{ cart, addToCart, totalCont, totalToPay, deleteFromCart, deleteAllFromCart }}>
      {children}
    </cartContext.Provider>
  );
}
