import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import Category from "./pages/category";
import Product from "./pages/product";
import Cart from "./pages/cart";
import LogIn from "./pages/login";

import Header from "./pages/header";
import FooterBlock from "./pages/footer";


function App() {
  return (
    <>
      <Header ></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>

      {/* <FooterBlock /> */}
    </>
  )
}

export default App;