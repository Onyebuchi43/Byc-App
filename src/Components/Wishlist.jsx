import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StarRating from './StarRating';
import Nav from './Nav';
import Footer from './Footer';
import '../style.css';
import DynamicBreadcrumb from './DynamicBreadCrumb';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  return (
    <>
      <Nav style={{ background: '#0000' }} />
      <DynamicBreadcrumb />

      <div style={{ marginTop: '8%' }}>
        <h2 style={{
          textAlign: 'left',
          marginLeft: '10px',
          color: '#212121',
          fontWeight: '600',
          fontSize: '30px'
        }}>
          Wishlist
        </h2>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
          padding: '2rem'
        }}>
          {wishlist.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#999' }}>
              <p>Your wishlist is currently empty.</p>
              <button
                onClick={() => navigate('/AllProducts')}
                style={{
                  marginTop: '1rem',
                  padding: '0.5rem 1rem',
                  backgroundColor: '#d33',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Browse Products
              </button>
            </div>
          ) : (
            wishlist.map(product => (
              <div
                key={product.id}
                style={{
                  width: '200px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  border: '1px solid #ddd',
                  padding: '1rem',
                  backgroundColor: '#fff'
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: '100%',
                    borderRadius: '10px',
                    marginBottom: '0.5rem'
                  }}
                />
                <h4>{product.title}</h4>
                <p style={{ fontSize: '14px', color: '#666' }}>{product.code}</p>
                <p style={{ fontSize: '13px', color: '#999' }}>{product.description}</p>
                <h4 style={{ marginTop: '5px' }}>{product.price}</h4>
                <StarRating rating={product.rating} color="#FBBF24" />

                <button
                  onClick={() => navigate('/checkout', { state: { product } })}
                  style={{
                    marginTop: '0.5rem',
                    backgroundColor: '#d33',
                    color: '#fff',
                    border: 'none',
                    padding: '0.4rem',
                    borderRadius: '5px',
                    width: '100%',
                    cursor: 'pointer'
                  }}
                >
                  🛒 Buy Now
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Wishlist;