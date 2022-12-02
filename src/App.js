import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/itemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";
import CartContextComponent from "./components/CartContextComponent";

export default function App() {
  return (
    <CartContextComponent>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
          <Route path="/item/:iditem" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextComponent>
  );
}
