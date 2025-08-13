import React from 'react'
import '../style.css';
import {AuthorImage} from '../images';

const AuthorSection = ({customStyles}) => {
  return (
    <>
     <div className="byc-news-article-card-center-author-section">
            <div className="byc-news-article-card-center-author-section-body" style={{...customStyles, display: 'flex', flexWrap: 'wrap', backgroundColor: '#E0E0E0', marginTop: '7%', width: '80%'}}>
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
    </>
  )
}

export default AuthorSection