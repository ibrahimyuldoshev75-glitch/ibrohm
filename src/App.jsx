import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from "./components/Header";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Events from "./pages/Events";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

import ProductCard from "./components/ProductCard";
import products from "./data/products";

function App() {

  return (

    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <div className="flex flex-wrap justify-center gap-6 p-6">
        {products.map((product) => (
          <ProductCard
            key={product.id || product.title}
            product={product}
          />
        ))}
      </div>
    </BrowserRouter>

  );
}

export default App;