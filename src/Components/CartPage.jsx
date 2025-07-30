import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import '../style.css';
import RecentlyViewed from './RecentlyViewed';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';
import { Divider } from '../images';

const CartPage = () => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    return storedCart.map(item => ({
      ...item,
      quantity: item.quantity || 1,
      price: typeof item.price === 'string'
        ? parseFloat(item.price.replace(/[₦,]/g, '')) || 0
        : item.price || 0
    }));
  });

  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem('wishlist')) || []);

  const updateCartInStorage = (items) => {
    setCartItems(items);
    localStorage.setItem('cart', JSON.stringify(items));
  };

  const handleQuantityChange = (index, delta) => {
    const updatedItems = [...cartItems];
    const newQty = (updatedItems[index].quantity || 1) + delta;
    if (newQty > 0) {
      updatedItems[index].quantity = newQty;
      updateCartInStorage(updatedItems);
    }
  };

  const toggleWishlist = (product) => {
    const isInWishlist = wishlist.some(item => item.id === product.id);
    const updatedWishlist = isInWishlist
      ? wishlist.filter(item => item.id !== product.id)
      : [...wishlist, product];

    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    updateCartInStorage(updatedCart);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const qty = item.quantity || 1;
      const price = item.price || 0;
      return total + price * qty;
    }, 0);
  };

  return (
    <>
      <Nav />
      <div style={{
        maxWidth: '1100px',
        margin: '2rem auto',
        padding: '2rem',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
      }}>
        <h2>Cart ({cartItems.length} item{cartItems.length !== 1 ? 's' : ''})</h2>
        <hr className="divider" />

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              marginBottom: '2rem',
              paddingBottom: '2rem',
              borderBottom: '1px solid #eee'
            }}>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '150px', borderRadius: '8px' }}
              />

              <div style={{ flex: 1 }}>
                <h3>{item.title}</h3>
                <h4 style={{ margin: 0 }}>{item.code}</h4>
                <p style={{ fontSize: '14px', color: '#555' }}>{item.description}</p>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                  <button
                    onClick={() => toggleWishlist(item)}
                    style={{
                      border: '1px solid #bd3a3a',
                      color: wishlist.some(w => w.id === item.id) ? 'red' : '#bd3a3a',
                      backgroundColor: '#fff',
                      padding: '0.75rem 2rem',
                      borderRadius: '8px',
                      fontSize: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      cursor: 'pointer'
                    }}
                  >
                    {wishlist.some(w => w.id === item.id) ? <AiFillHeart /> : <AiOutlineHeart />}
                    Wishlist
                  </button>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      backgroundColor: '#bd3a3a',
                      color: '#fff',
                      border: 'none',
                      padding: '0.75rem 2rem',
                      borderRadius: '8px',
                      fontSize: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      cursor: 'pointer'
                    }}
                  >
                    <FaTrashAlt /> Remove
                  </button>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <p>Quantity</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button
                    onClick={() => handleQuantityChange(index, -1)}
                    style={{
                      backgroundColor: '#bd3a3a',
                      color: '#fff',
                      border: 'none',
                      width: '30px',
                      height: '30px',
                      borderRadius: '4px',
                      fontSize: '18px',
                      cursor: 'pointer'
                    }}
                  >−</button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(index, 1)}
                    style={{
                      backgroundColor: '#bd3a3a',
                      color: '#fff',
                      border: 'none',
                      width: '30px',
                      height: '30px',
                      borderRadius: '4px',
                      fontSize: '18px',
                      cursor: 'pointer'
                    }}
                  >+</button>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <p>Unit Price</p>
                <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
                  ₦{(item.price * item.quantity).toLocaleString()}
                </p>
              </div>
            </div>
          ))
        )}

        {cartItems.length > 0 && (
          <div style={{
            textAlign: 'right',
            marginTop: '2rem',
            borderTop: '1px solid #eee',
            paddingTop: '1.5rem'
          }}>
            <h3>CART TOTALS</h3>
            <p><strong>Subtotal:</strong> ₦{calculateTotal().toLocaleString()}</p>
            <p><strong>Total:</strong> ₦{calculateTotal().toLocaleString()}</p>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1.5rem' }}>
              <button
                style={{
                  border: '1px solid #bd3a3a',
                  backgroundColor: '#fff',
                  color: '#bd3a3a',
                  padding: '0.8rem 1.5rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}
              >
                Continue Shopping
              </button>
              <button
                style={{
                  backgroundColor: '#bd3a3a',
                  color: '#fff',
                  padding: '0.8rem 1.5rem',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>

      <img style={{ color: '#000' }} src={Divider} alt="divider" />
      <RecentlyViewed />
      <Footer />
    </>
  );
};

export default CartPage;

