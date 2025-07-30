import React, { useState } from 'react';
import '../style.css';
import Nav from './Nav';
import Footer from './Footer';
import DynamicBreadcrumb from './DynamicBreadCrumb';
import { useLocation } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import QuantitySelector from './QuantitySelector';
import RecentlyViewed from './RecentlyViewed';
import ReviewSection from './ReviewSection';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  const toggleWishlist = (product) => {
    const isInWishlist = wishlist.some(item => item.id === product.id);
    const updatedWishlist = isInWishlist
      ? wishlist.filter(item => item.id !== product.id)
      : [...wishlist, product];

    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const location = useLocation();
  const product = location.state?.product;

  const navigate = useNavigate();


  return (
    <>
      <Nav />
      <DynamicBreadcrumb />

      <div className='cart-container' style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
        {product ? (
          <div className='cart-item' style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem' }}>
            {/* Product Image */}
            <div>
              <img src={product.image} alt={product.title} />
            </div>

            {/* Product Details */}
            <div>
              <h2>{product.title}</h2>
              <h2>{product.code}</h2>
              <p>{product.description}</p>
              <span>{product.rating}</span>
              <hr className="divider" />
              <h2>{product.price}</h2>

              {/* Sizes and Colours */}
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <div>
                  <h2>Available Sizes</h2>
                  <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                    {['S', 'M', 'L', 'XL'].map(size => (
                      <button
                        key={size}
                        style={{
                          backgroundColor: '#FFFFFF',
                          boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                          border: '2px solid #fff',
                          width: '40px',
                          height: '40px'
                        }}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h2>Available Colours</h2>
                  <div style={{ display: 'flex', gap: '10px', marginTop: '10px', alignItems: 'center' }}>
                    {['#3B70C4', '#FF00FF', '#FF8800', '#000000'].map((color, index) => (
                      <div
                        key={index}
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          backgroundColor: color,
                          cursor: 'pointer',
                          border: '1px solid #ccc'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Quantity, Wishlist, Add to Cart */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <QuantitySelector />

                <div
                  className="hover-buttons"
                  style={{
                    position: 'relative',
                    marginTop: '1rem',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => toggleWishlist(product)}
                    style={{
                      flex: 1,
                      backgroundColor: '#fff',
                      border: '1px solid #d33',
                      color: wishlist.some(item => item.id === product.id) ? 'red' : '#d33',
                      padding: '0.3rem',
                      borderRadius: '5px',
                      fontSize: '13px',
                      cursor: 'pointer',
                      width: '250px',
                      height: '50px',
                    }}
                    aria-label="Toggle Wishlist"
                  >
                    {wishlist.some(item => item.id === product.id) ? (
                      <AiFillHeart />
                    ) : (
                      <AiOutlineHeart />
                    )} Wishlist
                  </button>
                </div>

                <button
                  onClick={() => {
                      localStorage.setItem('cart', JSON.stringify([product]));
                      navigate('/cartpage');
                  }}
                  style={{
                    backgroundColor: '#BD3A3A',
                    borderRadius: '5px',
                    color: '#fff',
                    width: '75%',
                    height: '50px',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <i className="bi bi-cart"></i> Add to Cart
                </button>
              </div> 
            </div>
          </div>
        ) : (
          <p>No product selected. Please go back and choose a product</p>
        )}
      </div>

                <div className='container' style={{ marginTop: '2rem', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', padding: '40px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
                  <h2>Product Description</h2>
                  <hr className="divider" />
                  <p>{product.fullDescription}</p>
                </div>
              <ReviewSection />
              <RecentlyViewed/>

      <Footer />
    </>
  );
};

export default Cart;