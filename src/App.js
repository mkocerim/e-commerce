import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import Category from "./pages/category/category";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Cart from "./pages/cart/cart";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useApi from "./hooks/useApi";
import { setCategories } from "./redux/categorySlice";


function App() {

  const  api= useApi()
  const dispatch=useDispatch()

  const categoryState = useSelector(state=>state.categoryState)

  console.log('>>APP CATEGORY STATE', categoryState)

  if(categoryState.categories=== null) {
    // TODO kategoriler yüklenmediği için kategorileri API'den al
    
    api.get('shop/taxons')
    .then(response=>{
      console.log('>> APP CATEGORIES RESP', response)
      dispatch(setCategories({
        categories:response.data,
      }))
    }).catch(err=>{
      console.error('>>APP CATEGORIES ERR',err)
    })
  
  
  }



  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/category/:taxon_code" element={<Category />} />
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
