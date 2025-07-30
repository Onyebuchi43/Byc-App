import React from 'react'
import '../style.css'
import Nav from './Nav'
import Footer from './Footer'
import {BlogImageLeft, BlogImageCenter, BlogImageRight, AuthorImage, ReadMoreArrow} from '../images';
import AuthorSection from './AuthorSection';
import ReadMoreBtn from './ReadMoreBtn';

const Blog = () => {
  return (
    <>

      <div><Nav/></div>

            <div className="blog-news-title">
                <h1 style={{textAlign: 'center', marginTop: '8%', color: '#212121', fontWeight: '700', fontSize: '50px'}}>BYC AFRICA Blog News</h1>
            </div>
      
        <div className='blog-news'>
        <div className="blog-news-body" >
            <div className="blog-news-top" style={{marginTop: '10%', display: 'flex', flexWrap: 'wrap', marginLeft: '4%'}}>
                <img style={{marginRight: '3%', width: '40%', height: '450px'}} src={BlogImageRight} alt="" />
                <div className="summary">
                <h4 style={{display:'block'}}>Fashion trend forecast for  Summer 2021</h4>
                <p style={{display:'block'}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet<br/>
                 sint. Velit officia consequat duis enim velit mollit. Exercitation veniam<br/>
                  consequat sunt nostrud ametAmet minim mollit non deserunt ullamco<br/>
                   est sit aliqua dolor do amet sint. Velit<br/> officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet..</p>

                <ReadMoreBtn/>
                < AuthorSection />  
                </div>
            </div>
        </div>
      </div>

      <div className='blog-news'>
        <div className="blog-news-body" >
            <div className="blog-news-top" style={{marginTop: '10%', display: 'flex', flexWrap: 'wrap', marginLeft: '4%'}}>
                <div className="summary">
                <h4 style={{display:'block'}}>Fashion trend forecast for  Summer 2021</h4>
                <p style={{display:'block'}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet<br/>
                 sint. Velit officia consequat duis enim velit mollit. Exercitation veniam<br/>
                  consequat sunt nostrud ametAmet minim mollit non deserunt ullamco<br/>
                   est sit aliqua dolor do amet sint. Velit<br/> officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet..</p>

                <ReadMoreBtn/>
                < AuthorSection />  
                </div>
                <img style={{marginLeft: '3%', width: '40%', height: '450px'}} src={BlogImageLeft} alt="" />

            </div>
        </div>
      </div>


      <div className='blog-news'>
        <div className="blog-news-body" >
            <div className="blog-news-top" style={{marginTop: '10%', display: 'flex', flexWrap: 'wrap', marginLeft: '4%'}}>
                <img style={{marginRight: '3%', width: '40%', height: '450px'}} src={BlogImageCenter} alt="" />
                <div className="summary">
                <h4 style={{display:'block'}}>Fashion trend forecast for  Summer 2021</h4>
                <p style={{display:'block'}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet<br/>
                 sint. Velit officia consequat duis enim velit mollit. Exercitation veniam<br/>
                  consequat sunt nostrud ametAmet minim mollit non deserunt ullamco<br/>
                   est sit aliqua dolor do amet sint. Velit<br/> officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet..</p>

                <ReadMoreBtn/>
                < AuthorSection />  
                </div>
            </div>
        </div>
      </div>


      <Footer/>
    </>
  )
}

export default Blog