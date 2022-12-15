import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import Category from "./pages/category/category";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Cart from "./pages/cart/cart";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/category/:slug" element={<Category />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
