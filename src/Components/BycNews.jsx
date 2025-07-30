import React from 'react'
import '../style.css'
import { BlogHero } from '../images'
import {BlogImageLeft, BlogImageCenter, BlogImageRight, AuthorImage, ReadMoreArrow} from '../images';
import Blog from './Blog';
import { useNavigate } from "react-router-dom";
import ReadMoreBtn from './ReadMoreBtn';



const BycNews = ({hideTitle}) => {
  
    const navigate = useNavigate();
  
    const handleBlog = () => {
    navigate('/blog');
  };

  return (
    <>
     <div className="byc-news">
    <div className="byc-news-body" style={{marginTop: '8%'}}>
      {!hideTitle && (
        <div className="byc-news-title">
        <h2 style={{textAlign: 'center', fontWeight: '800', fontSize: '35px'}}>BYC AFRICA Blog News</h2>
      </div>
      )}
      
      <div className="byc-news-article-cards" style={{marginTop: '10%', marginBottom: '2%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
         <div className="byc-news-article-card-left" style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', width: '29.6.5%', marginRight: '1%'}}>
          <img style={{padding: '0 ! important'}} src={BlogImageLeft} alt="" />
          <div className="byc-news-article-card-left-body" style={{paddingLeft: '10%'}}>
          <div className="byc-news-article-card-left-author-section">
            <div className="byc-news-article-card-left-author-section-body" style={{display: 'flex', flexWrap: 'wrap', backgroundColor: '#E0E0E0', marginTop: '7%', width: '80%'}}>
            <img src={AuthorImage} alt=""/>
            <div className="author-view-like-icon-1" style={{paddingLeft: '22%', paddingTop: '8%', display: 'flex', flexWrap: 'wrap'}}>
              <i className="bi bi-eye"> 35</i>
              <i className="bi bi-heart" style={{paddingLeft: '20px'}}> 23</i>
            </div>
          </div>
          </div>
          <div className="author-name-proffesion" style={{display: 'flex', flexWrap: 'wrap', marginTop: '3%'}}>
              <h5 style={{fontSize: '18px', color: '#424242', fontWeight: '600', paddingRight: '7%'}}>Wade Warren</h5>
              <p style={{fontSize: '15px', fontWeight: '400'}}>Fashion Designer</p>
            </div>
          <div className="byc-news-article-card-left-title">
            <h3 style={{fontSize: '25px', fontWeight: '700'}}>How important are clothes<br/> in your style?</h3>
            <p style={{fontSize: '14px'}}>Amet minim mollit non deserunt ullamco est sit aliqua<br/>
             dolor do amet sint. Velit officia consequat duis enim<br/>
              velit mollit. Exercitation veniam consequat sunt nostrud<br/> amet.</p>
          </div>
          <ReadMoreBtn />          
        </div>
        </div>

        <div className="byc-news-article-card-center" style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', width: '29.6.5%', marginRight: '1%'}}>
          <img style={{padding: '0 ! important'}} src={BlogImageCenter} alt="" />
          <div className="byc-news-article-card-center-body" style={{paddingLeft: '10%'}}>
          <div className="byc-news-article-card-center-author-section">
            <div className="byc-news-article-card-center-author-section-body" style={{display: 'flex', flexWrap: 'wrap', backgroundColor: '#E0E0E0', marginTop: '7%', width: '80%'}}>
            <img src={AuthorImage} alt=""/>
            <div className="author-view-like-icon-1" style={{paddingLeft: '22%', paddingTop: '8%', display: 'flex', flexWrap: 'wrap'}}>
              <i className="bi bi-eye"> 35</i>
              <i className="bi bi-heart" style={{paddingLeft: '20px'}}> 23</i>
            </div>
          </div>
          </div>
          <div className="author-name-proffesion" style={{display: 'flex', flexWrap: 'wrap', marginTop: '3%'}}>
              <h5 style={{fontSize: '18px', color: '#424242', fontWeight: '600', paddingRight: '7%'}}>Wade Warren</h5>
              <p style={{fontSize: '15px', fontWeight: '400'}}>Fashion Designer</p>
            </div>
          <div className="byc-news-article-card-center-title">
            <h3 style={{fontSize: '25px', fontWeight: '700'}}>How important are pants<br/> in your style?</h3>
            <p style={{fontSize: '14px'}}>Amet minim mollit non deserunt ullamco est sit aliqua<br/>
             dolor do amet sint. Velit officia consequat duis enim<br/>
              velit mollit. Exercitation veniam consequat sunt nostrud<br/> amet.</p>
          </div>
          <ReadMoreBtn />
        </div>
        </div>

        <div className="byc-news-article-card-right" style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', width: '29.6.5%', marginRight: '1%'}}>
          <img style={{padding: '0 ! important'}} src={BlogImageRight} alt="" />
          <div className="byc-news-article-card-right-body" style={{paddingLeft: '10%', paddingBottom: '20%'}}>
          <div className="byc-news-article-card-right-author-section">
            <div className="byc-news-article-card-right-author-section-body" style={{display: 'flex', flexWrap: 'wrap', backgroundColor: '#E0E0E0', marginTop: '7%', width: '80%'}}>
            <img src={AuthorImage} alt=""/>
            <div className="author-view-like-icon-1" style={{paddingLeft: '22%', paddingTop: '8%', display: 'flex', flexWrap: 'wrap'}}>
              <i className="bi bi-eye"> 35</i>
              <i className="bi bi-heart" style={{paddingLeft: '20px'}}> 23</i>
            </div>
          </div>
          </div>
          <div className="author-name-proffesion" style={{display: 'flex', flexWrap: 'wrap', marginTop: '3%'}}>
              <h5 style={{fontSize: '18px', color: '#424242', fontWeight: '600', paddingRight: '7%'}}>Wade Warren</h5>
              <p style={{fontSize: '15px', fontWeight: '400'}}>Fashion Designer</p>
            </div>
          <div className="byc-news-article-card-right-title">
            <h3 style={{fontSize: '25px', fontWeight: '700'}}>How important are shoes<br/> in your style?</h3>
            <p style={{fontSize: '14px'}}>Amet minim mollit non deserunt ullamco est sit aliqua<br/>
             dolor do amet sint. Velit officia consequat duis enim<br/>
              velit mollit. Exercitation veniam consequat sunt nostrud<br/> amet.</p>
          </div>
          <ReadMoreBtn />
        </div>
        </div>
      </div>
      {!hideTitle && (
        <div className="view-all text-center">
      <button onClick={handleBlog} type="button" className="btn btn-outline-dark view-all-btn" style={{width: '230px', height: '50px', border: '2px solid #000001', fontWeight: '700', marginTop: '2%'}}>View All</button>
      </div>
      )}
     
    </div>
  </div> 
    </>
  )
}

export default BycNews
