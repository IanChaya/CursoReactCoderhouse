import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import iPhone from "./components/iPhone";
import iPad from "./components/iPad";
import Watch from "./components/Watch";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/itemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";

//import ItemCounter from "./components/itemCounter";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <ItemListContainer greeting="¡Bienvenido a iStore!" />
//       {/* <ItemCounter/> */}
//       <Footer />
//     </div>
//   );
// }

// export default App;


export default function App() {
  return (
    <BrowserRouter>
      {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS */}
      <Navbar />
      {/* ACA DECLARO RUTAS PUNTUALES */}
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/iPad" element={<iPad />} />
        <Route path="/iPhone" element={<iPhone />} />
        <Route path="/Watch" element={<Watch />} />
        <Route path="/category/:idcategory" element={<ItemListContainer />} />
        <Route path="/item/:iditem" element={<ItemDetailContainer />} />
      </Routes>
      {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS ABAJO DE TODO*/}
      <Footer />
    </BrowserRouter>
  );
}