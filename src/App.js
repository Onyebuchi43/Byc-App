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
      </Routes>
    </Router>
  );
};
export default App;