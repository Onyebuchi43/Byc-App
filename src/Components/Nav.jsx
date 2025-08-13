import React from 'react';
import { Logo } from '../images';
import { useNavigate } from 'react-router-dom';
import '../style.css';

const Nav = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/ContactUs');
  };

  const handleAbout = () => {
    navigate('/AboutUs');
  };

  const handleProducts = () => {
    navigate('/AllProducts');
  };

  const handleWishlist = () => {
    navigate('/Wishlist');
  }; 

  return (
    <nav className="navbar navbar-expand-lg bg-none">
      <div className="container-fluid d-flex align-items-center justify-content-between">

        {/* Left Section */}
        <div className="d-flex align-items-center">
          <button
            className="navbar-toggler me-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a onClick={handleProducts} style={{cursor: 'pointer'}} className="nav-link">Shop Products</a>
              </li>
              <li className="nav-item">
                <a style={{cursor: 'pointer'}} className="nav-link">Blog</a>
              </li>
              <li className="nav-item">
                <a style={{cursor: 'pointer'}} className="nav-link">FAQ</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Center Logo */}
        <div className="d-flex justify-content-center flex-grow-1">
          <a className="navbar-brand" onClick={() => navigate('/')}>
            <img
              src={Logo}
              alt="Logo"
              style={{
                height: '50px',
                cursor: 'pointer',
                display: 'block',
                margin: '0 auto',
                cursor: 'pointer'
              }}
            />
          </a>
        </div>

        {/* Right Section */}
        <div className="d-flex align-items-center">
          <ul className="navbar-nav d-none d-lg-flex">
            <li className="nav-item">
              <a onClick={handleAbout} style={{cursor: 'pointer'}} className="nav-link">About Us</a>
            </li>
            <li className="nav-item">
              <a onClick={handleContact} style={{cursor: 'pointer'}} className="nav-link">Contact</a>
            </li>
            <li className="nav-item">
              <a style={{cursor: 'pointer'}} className="nav-link"><i className="bi bi-search"></i></a>
            </li>
            <li className="nav-item">
              <a style={{cursor: 'pointer'}} className="nav-link"><i className="bi bi-person"></i></a>
            </li>
            <li className="nav-item">
              <a onClick={handleWishlist} style={{cursor: 'pointer'}} className="nav-link"><i className="bi bi-heart"></i></a>
            </li>
            <li className="nav-item">
              <a style={{cursor: 'pointer'}} className="nav-link"><i className="bi bi-cart"></i></a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Nav;
