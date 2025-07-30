import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import '../style.css';
import {SecuredPayImage} from '../images';

const Checkout = () => {
  const location = useLocation();
  const product = location.state?.product;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    country: '',
    city: '',
    state1: '',
    state2: '',
    phone: '',
    email: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('bank');

  const deliveryFee = 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Shipping form submitted!');
  };

  const handlePlaceOrder = () => {
    alert(`Order placed using ${paymentMethod === 'bank' ? 'Direct Bank Transfer' : 'Online Payment'}`);
  };

  if (!product) {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>No product data found.</h2>
        <button onClick={() => navigate('/')}>Go Back</button>
      </div>
    );
  }

  return (
    <>
      <Nav />
      {/* Product Summary */}
      <div style={{ padding: '2rem' }}>
        <h2>Order Summary 1 item(s)</h2>
        <div style={{
          display: 'flex',
          gap: '1rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          padding: '1rem',
          borderRadius: '10px',
        }}>
          <img src={product.image} alt={product.title} style={{ width: '150px', borderRadius: '10px' }} />
          <div style={{ flex: 1 }}>
            <h3>{product.title}</h3>
            <p style={{ fontWeight: 'bold' }}>{product.code}</p>
            <p>{product.description}</p>
            <h3 style={{ marginTop: '0.5rem' }}>{product.price}</h3>
            <p>Quantity: 1</p>
            <button style={{
              marginTop: '1rem',
              backgroundColor: '#d33',
              color: '#fff',
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>
              Modify Cart
            </button>
          </div>
          <div style={{ minWidth: '200px' }}>
            <p>Subtotal: {product.price}</p>
            <p>Delivery fee: ₦{deliveryFee.toFixed(2)}</p>
            <hr />
            <p style={{ fontWeight: 'bold' }}>Total: {product.price}</p>
          </div>
        </div>
      </div>

      {/* Checkout and Shipping Section */}
      <div style={{
        display: 'flex',
        padding: '2rem',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}>
        {/* Shipping Form */}
        <form style={{ flex: 1, maxWidth: '48%' }} onSubmit={handleSubmit}>
          <h2>SHIPPING ADDRESS</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            <input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} style={inputStyle} />
            <input name="company" placeholder="Company name (optional)" value={formData.company} onChange={handleChange} style={inputStyle} />
            <input name="country" placeholder="Country / Region" value={formData.country} onChange={handleChange} style={inputStyle} />
            <input name="city" placeholder="Town / City" value={formData.city} onChange={handleChange} style={inputStyle} />
            <input name="state1" placeholder="State" value={formData.state1} onChange={handleChange} style={inputStyle} />
            <input name="state2" placeholder="State" value={formData.state2} onChange={handleChange} style={inputStyle} />
            <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} style={inputStyle} />
            <input name="email" placeholder="Email address" value={formData.email} onChange={handleChange} style={inputStyle} />
            <button type="submit" style={buttonStyle}>submit</button>
          </div>
        </form>

        {/* Payment and Final Order */}
        <div style={{ flex: 1, maxWidth: '48%' }}>
          <h2>CHECKOUT</h2>
          <div style={{
            backgroundColor: '#fff0f0',
            padding: '1rem',
            borderRadius: '10px',
            marginTop: '1rem',
          }}>
            <label style={radioStyle}>
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === 'bank'}
                onChange={() => setPaymentMethod('bank')}
              />
              <span style={{ marginLeft: '0.5rem' }}>Direct bank transfer</span>
            </label>
            <div style={noteBox}>
              Make your payment directly into our bank account.<br/> Use your Order ID as payment reference.<br/> Your order will not be shipped until funds clear in our account.
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
            <label style={radioStyle}>
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === 'online'}
                onChange={() => setPaymentMethod('online')}
              />
              <span style={{ marginLeft: '0.5rem' }}>Secured Online Payment</span>
            </label>
            <img
              src={SecuredPayImage}
              alt="Flutterwave"
              style={{ marginTop: '1rem', height: '40px' }}
            />
            </div>
            <p style={{ marginTop: '1rem', fontSize: '12px' }}>
            Your personal data will be used to process your order, support your experience throughout<br/> this website, and for other purposes described in our privacy policy.
          </p>
          </div>

          <button onClick={handlePlaceOrder} style={buttonStyle}>Place order</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

// Shared styles
const inputStyle = {
  padding: '0.75rem',
  border: '1px solid #c33',
  borderRadius: '8px',
  fontSize: '14px',
  width: '100%',
};

const buttonStyle = {
  backgroundColor: '#bd3e3e',
  color: '#fff',
  padding: '0.75rem',
  border: 'none',
  borderRadius: '8px',
  marginTop: '1rem',
  fontSize: '16px',
  cursor: 'pointer',
  width: '700px'
};

const radioStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: '1rem',
};

const noteBox = {
  backgroundColor: '#fff',
  border: '1px solid #f8d7da',
  padding: '0.75rem',
  borderRadius: '5px',
  marginTop: '0.5rem',
  fontSize: '13px',
};

export default Checkout;