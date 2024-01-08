import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowProducts from "./components/ShowProducts";
import AddProducts from "./components/AddProducts";
import ProductDetails from "./components/ProductDetails";
import UpdateProducts from "./components/UpdateProducts";
import NavbarMenu from "./components/NavbarMenu";

function App() {
  return (
    <div>
      <Router>
        <NavbarMenu />
        <Routes>
          <Route path="/" element={<ShowProducts />} />
          <Route path="/Add" element={<AddProducts />} />
          <Route path="/Details" element={<ProductDetails />} />
          <Route path="/Update" element={<UpdateProducts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
