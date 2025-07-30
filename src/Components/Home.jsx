import React from 'react';
import '../style.css';
import {Logo, SubImageLeft, SubImageCenter, SubImageRight, NewImageLeft, NewImageCenter, NewImageRight, CollectionImageRight, CollectionButtomLeft, CollectionButtomRight, Underline, WomenPantsLeft, WomenPantsCenter, WomenPantsRight, NavArrowLeft, NavArrowRight, BlogImageLeft, BlogImageCenter, BlogImageRight, AuthorImage, ReadMoreArrow, Paypal, Visa, Mastercard, NewsLetterArrow, Mail, Phone, Facebook, Instagram, X, Youtube, HR} from '../images';
import Selectbtn from './Selectbtn';
import { useEffect } from 'react';
import Footer from './Footer';
import Nav from './Nav';
import BycNews from './BycNews';
import Blog from './Blog';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const handleAbout = () => {
  navigate('/AboutUs');
  };

  useEffect(() => {
    // Gender selection buttons
    const genderButtons = document.querySelectorAll(".gender-select-btn-1, .gender-select-btn-2, .gender-select-btn-3");
    genderButtons.forEach((button) => {
      button.addEventListener("click", () => {
        genderButtons.forEach((btn) => {
          btn.style.color = "";
          btn.style.textDecoration = "";
          btn.style.borderBottom = "none";
        });

        button.style.color = "gray";
        button.style.textDecoration = "none";
        button.style.borderBottom = "";
      });
    });

    // Clothing selection buttons
    const clothingButtons = document.querySelectorAll(".clothing-select-btn-1, .clothing-select-btn-2, .clothing-select-btn-3, .clothing-select-btn-4");
    clothingButtons.forEach((button) => {
      button.addEventListener("click", () => {
        clothingButtons.forEach((btn) => {
          btn.style.backgroundColor = "white";
          btn.style.color = "";
        });

        button.style.backgroundColor = "red";
        button.style.color = "white";
      });
    });

    // Cleanup event listeners
    return () => {
      genderButtons.forEach((button) => {
        button.removeEventListener("click", () => {});
      });
      clothingButtons.forEach((button) => {
        button.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <>
    <div><Nav /></div>
      

  <div className="d-flex flex-column align-items-center justify-content-center bg-none text-center heading">
    
    <p className="fs-4 mb-4" style={{fontWeight: '450', fontSize: '80px'}}>Your body deserves comfort</p>
    <span className=" fw-bold mb-5" style={{fontSize: '60px', width: '690px'}}>Get the best for <span id="changingText" style={{fontSize: '55px', fontWeight: '700', minWidthwidth: '2px'}}>yourself</span></span>
    <div className="shop-learn-btn">
      <button type="button" className="btn btn-dark me-2" style={{width: '250px', height: '60px', fontWeight: '700'}}>Shop Now</button>
      <button onClick={handleAbout} type="button" className="btn btn-outline-dark learn-more-btn" style={{width: '250px', height: '60px', border: '3px solid #000001', fontWeight: '700', marginLeft: '20px'}}>Learn More</button>
    </div>
    </div>

  <div className="text-center sub-img">
    <img src={SubImageLeft} alt="" className='sub-img-left'/>
    <img src={SubImageCenter} alt="" className='sub-img-center'/>
    <img src={SubImageRight} alt="" />
  </div>

  <div className="new-arrival">
    <div className="new-arrival-body">
      <div className="new-arrival-top text-center">
        <h3 style={{fontSize: '250%'}}>Checkout BYC New Arrivals</h3>
      </div>

      <div className="new-arrival-img" style ={{display: 'flex', flexWrap: 'wrap'}}>
        <div className="new-arrival-left" style={{marginRight: '1%'}}>
          <img src={NewImageLeft} alt=""/>
          <div className="new-arrival-left-title" style={{paddingTop: '7%'}}>
          <h5 style={{fontSize: '30px'}}>Men Underwears</h5>
          <p>Parturient Venenatis Etiam</p>
          </div>
        </div>

        <div className="new-arrival-center" style={{marginRight: '1%'}}>
        <img src={NewImageCenter} alt="" />
        <div className="new-arrival-center-title" style={{paddingTop: '7%'}}>
        <h5 style={{fontSize: '30px'}}>Women Underwears</h5>
        <p>Parturient Venenatis Etiam</p>
        </div>
      </div>

      <div className="new-arrival-right">
        <img src={NewImageRight} alt="" />
        <div className="new-arrival-right-title" style={{paddingTop: '7%'}}>
        <h5 style={{fontSize: '30px'}}>Underwears</h5>
        <p>Parturient Venenatis Etiam</p>
        </div>
      </div>
      </div>

    <div className="view-all text-center">
      <button type="button" className="btn btn-outline-dark view-all-btn" style={{width: '230px', height: '50px', border: '2px solid #000001', fontWeight: '700', marginTop: '4%'}}>View All</button>
    </div>

    </div>
  </div>

  <div className="byc-collection">
    <div className="collection-body" style={{marginTop: '8%'}}>
        <div className="collection-body-top d-flex">
        <div className="collection-top-left me-2" style={{backgroundColor: '#F1F1F1', width: '45%', padding: '90px', height: '550px'}}>
            <div className="collection-top-left-h">
            <h2 style={{ color: '#616161', fontWeight: '700'}}>BYC Collection 2021</h2>
                <h1 style={{fontSize: '50px', fontWeight: '700'}}>BYC Collection</h1>
                <p style={{fontWeight: '400', fontSize: '13px'}}>The best everyday option in a Super Saver range within a<br /> reasonable price. It is our responsibility to keep you<br />
                100 percent stylish. Be smart & trendy with us.</p>
            </div>
            <div className="explore">
             <button type="button" className="btn btn-outline-dark explore-btn" style={{width: '230px', height: '60px', border: '2px solid #000001', fontWeight: '700', marginTop: '10%'}}>Explore</button>
            </div>
        </div>

        <div className="collection-top-right">
            <div className="collection-top-right-img">
                <img src={CollectionImageRight} alt="" style={{width: '123%', height: '550px' }}/>
            </div>
        </div>
        </div>

        <div className="collection-body-buttom d-flex mt-3">
        <div className="collection-buttom-left me-2">
            <div className="collection-buttom-left-img">
                <img src={CollectionButtomLeft} alt="" style={{width: '119.2%', height: '550px' }}/>
            </div>
        </div>


        <div className="collection-buttom-right">
            <div className="collection-buttom-right-img">
                <img src={CollectionButtomRight} alt="" style={{width: '142.5%', height: '550px', paddingLeft: '19.5%' }}/>
            </div>
        </div>
        </div>

        <div className="view-all text-center">
      <button type="button" className="btn btn-outline-dark view-all-btn" style={{width: '230px', height: '50px', border: '2px solid #000001', fontWeight: '700', marginTop: '7%'}}>View All</button>
    </div>
    </div>
  </div>


  <div className="shop-category" >
    <div className="shop-category-body" style={{marginTop: '8%', textAlign: 'center'}}>
      <div className="shop-category-title">
        <h1 style={{paddingBottom: '40px'}}>Shop By Category</h1>
      </div>
      <div className="shop-category-gender" style={{marginBottom: '2%'}}>
        <button className="gender-select-btn-1" style={{fontSize: '24px', padding: '10px 20px', border: 'none', cursor: 'pointer', backgroundColor: 'white', color: 'black'}}>For Women</button>
        <button className="gender-select-btn-2" style={{fontSize: '24px', padding: '10px 20px', border: 'none', cursor: 'pointer', backgroundColor: 'white', color: 'black'}}>For Men</button>
        <button className="gender-select-btn-3" style={{fontSize: '24px', padding: '10px 20px', border: 'none', cursor: 'pointer', backgroundColor: 'white', color: 'black'}}>For Kids</button>
      </div>
      <div className="shop-category-selection">
        <button className="clothing-select-btn-1" style={{display: 'inlineBlock', padding: '10px 20px', margin: '5px', border: '1px solid #F5F5F5', textAlign: 'center', cursor: 'pointer', fontSize: '20px', backgroundColor: 'white', width: '100px', height: '50px'}}>T-shirt</button>
        <button className="clothing-select-btn-2" style={{display: 'inlineBlock', padding: '10px 20px', margin: '5px', border: '1px solid #F5F5F5', textAlign: 'center', cursor: 'pointer', fontSize: '20px', backgroundColor: 'white', width: '100px', height: '50px'}}>Singlet</button>
        <button className="clothing-select-btn-3" style={{display: 'inlineBlock', padding: '10px 20px', margin: '5px', border: '1px solid #F5F5F5', textAlign: 'center', cursor: 'pointer', fontSize: '20px', backgroundColor: 'white', width: '100px', height: '50px'}}>Pants</button>
        <button className="clothing-select-btn-4" style={{display: 'inlineBlock', padding: '10px 20px', margin: '5px', border: '1px solid #F5F5F5', textAlign: 'center', cursor: 'pointer', fontSize: '20px', backgroundColor: 'white', width: '100px', height: '50px'}}>Boxers</button>
      </div>

      <div className="shop-category-image">
        <div className="shop-category-image-body" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '9%', position: 'relative'}}>
          <div className="shop-category-image-body-left">
            <img src={WomenPantsLeft} alt="" />
            <div className="shop-category-image-body-left-title" style={{display: 'flex', paddingLeft: '5%', paddingTop: '6%'}}>
              <h5 style={{paddingRight: '3%'}}>WOWEN PANTS</h5>
              <p>BYC-501LMS</p>
            </div>
            <div className="shop-category-image-body-left-price" style={{display: 'flex', paddingLeft: '5%'}}>
              <h6>₦2,800.00</h6>
            </div>
          </div>
          <div className="shop-category-image-body-center">
            <img src={WomenPantsCenter} alt="" />
            <div className="shop-category-image-body-center-title" style={{display: 'flex', paddingLeft: '5%', paddingTop: '6%'}}>
              <h5 style={{paddingRight: '3%'}}>WOWEN PANTS</h5>
              <p>BYC-501LMS</p>
            </div>
            <div className="shop-category-image-body-center-price" style={{display: 'flex', paddingLeft: '5%'}}>
              <h6>₦2,800.00</h6>
            </div>
          </div>
          <div className="shop-category-image-body-right" >
            <img src={WomenPantsRight} alt="" />
            <div className="shop-category-image-body-right-title" style={{display: 'flex', paddingLeft: '5%', paddingTop: '6%'}}>
              <h5 style={{paddingRight: '3%'}}>WOWEN PANTS</h5>
              <p>BYC-501LMS</p>
            </div>
            <div className="shop-category-image-body-right-price" style={{display: 'flex', paddingLeft: '5%'}}>
              <h6>₦2,800.00</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-arrows">
        <div className="nav-arrows-body" style={{position: 'absolute', top: '490%', transform: 'translateY(490%)', left: '0', right: '0', display: 'flex', justifyContent: 'space-between', cursor: 'pointer'}}>
          <div className="nav-arrow-left">
            <img src={NavArrowLeft} alt="" />
          </div>
          <div className="nav-arrow-right">
            <img src={NavArrowRight} alt="" />
          </div>
        </div>
      </div>
      <div className="view-all text-center">
      <button type="button" className="btn btn-outline-dark view-all-btn" style={{width: '230px', height: '50px', border: '2px solid #000001', fontWeight: '700', marginTop: '7%'}}>View All</button>
    </div>
    </div>
  </div>


  <div><BycNews/></div>

  
      <div><Footer/></div>

  </>
  )
}

export default Home
