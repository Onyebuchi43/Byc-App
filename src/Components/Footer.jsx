import React from 'react'
import '../style.css';
import {Paypal, Visa, Mastercard, NewsLetterArrow, Mail, Phone, Facebook, Instagram, X, Youtube, HR} from '../images';
import CurrentYear from './CurrentYear';
import '../footer.css';

const Footer = () => {
  return (
    <>
     <div className="footer">
    <div className="footer-body row" style={{backgroundColor: '#212121', color: '#FFFFFF', marginTop: '13%', display: "flex", flexWrap: "wrap", gap: "20px", paddingTop: '5%'}}>
      <div className='col-sm-12 col-md-12 col-lg-1'></div>
      <div className='col-sm-12 col-md-12 col-lg-6'>
        <div className="footer-section">
        <div className="footer-section-body row" style={{display: "flex"}}>
          <div className='col-sm-12 col-md-12 col-lg-3'>
            <div className="company-info">
            <h3 style={{fontWeight: '600', fontSize: '18px'}}>Company Info</h3>
            <ul style={{listStyleType: 'none', padding: '0'}}>
             <li><a href="" style={{textDecoration: 'none', color: '#FFFFFF', fontWeight: '300'}}>About us</a></li>
             <li><a href="" style={{textDecoration: 'none', color: '#FFFFFF', fontWeight: '300'}}>Affliate</a></li>
             <li><a href="" style={{textDecoration: 'none', color: '#FFFFFF', fontWeight: '300'}}>Fashion Blogger</a></li>
          </ul>
        </div>
        </div>
        <div className='col-sm-12 col-md-12 col-lg-3'>
          <div className="help-support" style={{width: '100%'}}>
          <h3 style={{fontWeight: '600', fontSize: '18px', width: '100%'}}>Help & Support</h3>
          <ul style={{listStyleType: 'none', padding: '0'}}>
            <li><a href="" style={{textDecoration: 'none', color: '#FFFFFF', fontWeight: '300'}}>Shipping Info</a></li>
            <li><a href="" style={{textDecoration: 'none', color: '#FFFFFF', fontWeight: '300'}}>Refunds</a></li>
            <li><a href="" style={{textDecoration: 'none', color: '#FFFFFF', fontWeight: '300'}}>How to Order</a></li>
            <li><a href="" style={{textDecoration: 'none', color: '#FFFFFF', fontWeight: '300'}}>How to Track</a></li>
            <li><a href="" style={{textDecoration: 'none', color: '#FFFFFF', fontWeight: '300'}}>Size Guides</a></li>
          </ul>
        </div>
        </div>
        <div className='col-sm-12 col-md-12 col-lg-3'>
          <div className="customer-care">
          <h3 style={{fontWeight: '600', fontSize: '18px'}}>Customer Care</h3>
          <ul style={{listStyleType: 'none', padding: '0'}}>
            <li><a href="" style={{textDecoration: 'none', color: '#FFFFFF', fontWeight: '300'}}>Contact Us</a></li>
            <li><a href="" style={{textDecoration: 'none', color: '#FFFFFF', fontWeight: '300'}}>Payment Methods</a></li>
            <img style={{marginRight: '18px'}} src={Paypal} alt="Paypal" />
            <img style={{marginRight: '18px'}} src={Visa} alt="Visa" />
            <img src={Mastercard} alt="Mastercard" />
          </ul>
        </div>
        </div>
        </div>
        </div>
      </div>
      <div className='col-sm-12 col-md-12 col-lg-3'>
        <div className="signup-news-letter">
          <div className="signup-news-letter-body">
            <h3 style={{fontWeight: '600', fontSize: '18px'}}>Signup For The Latest News</h3>
            <input className='input-email' type="email" placeholder="Enter Email" style={{width: '75%', height: '40px', borderRadius: '2px solid  #FFFFFF', border: '1px solid #ccc', backgroundColor: '#212121', color: '#FFF00', opacity: '1', position: 'relative', zIndex: '0'}} />
            <button className='NewsLetter' style={{background: 'none', border: 'none', cursor: 'pointer', marginLeft: '-26px', marginTop: '5px', zIndex: '0', position: 'absolute'}}><img src={NewsLetterArrow} alt="" /></button>
            <div className="official-email">
              <p style={{ fontWeight: '300', paddingTop: '32px'}}><img src={Mail} alt="" /> bycafrica@gmail.com </p>
            </div>
            <div className="official-phone-numbers">
              <p style={{ fontWeight: '300'}}> <img src={Phone} alt="" /> +2348101375376 ; +2349053403403 </p>
            </div>
          </div>
        </div>
      </div>
          <div className='col-sm-12 col-md-12 col-lg-1'></div>

        <div className="social-media">
        <div className="social-media-body" style={{textAlign: 'center'}}>
          <button style={{background: '#FFFFFF', border: '15px solid white', cursor: 'pointer', padding: '0', borderRadius: '50%', overflow: 'hidden', marginRight: '15px'}}><img src={Facebook} alt="Facebook" /></button>
          <button style={{background: '#FFFFFF', border: '15px solid white', cursor: 'pointer', padding: '0', borderRadius: '50%', overflow: 'hidden', marginRight: '15px'}}><img src={Instagram} alt="Instagram" /></button>
          <button style={{background: '#FFFFFF', border: '15px solid white', cursor: 'pointer', padding: '0', borderRadius: '50%', overflow: 'hidden', marginRight: '15px'}}><img src={X} alt="X" /></button>
          <button style={{background: '#FFFFFF', border: '15px solid white', cursor: 'pointer', padding: '0', borderRadius: '50%', overflow: 'hidden', marginRight: '15px'}}><img src={Youtube} alt="Youtube" /></button>
        </div>
      </div>

      <div className="hr" style={{textAlign: 'center'}}>
        <img style={{width: '80%', textAlign: 'center'}} src={HR} alt="" />
      </div>

      <div className="footer-bottom" style={{textAlign: 'center'}}>
        <p style={{fontWeight: '300'}}>All rights Reserved  copyright bycafrica <CurrentYear/>.</p>
      </div>
      </div>
      </div>
 
    </>
  )
}

export default Footer
