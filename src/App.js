import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import TextChanger from './Components/Textchanger';
import Selectbtn from './Components/Selectbtn';
import Blog from './Components/Blog';
import Blogs from './Components/Blogs';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import AllProducts from './Components/AllProducts';
import Login from './Components/Login';
import Checkout from './Components/Checkout';
import Cart from './Components/Cart';
import Wishlist from './Components/Wishlist';
import Boxers from './Components/Boxers';
import CartPage from './Components/CartPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <TextChanger />
            <Selectbtn />
          </>
        } />
        <Route path="/blog" element={<Blog />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AllProducts" element={<AllProducts />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Cart/:id" element={<Cart />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Boxers" element={<Boxers />} />
        <Route path="/CartPage" element={<CartPage />} />
      </Routes>
    </Router>
  );
};
export default App;