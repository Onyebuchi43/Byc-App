import React from 'react'
import '../style.css'
import Nav from './Nav'
import Footer from './Footer'
import RecentlyViewed from './RecentlyViewed'
import DynamicBreadcrumb from './DynamicBreadCrumb';
import { Aboutus, AwardsMedal, BycMenBoxers, HR } from '../images';

const AboutUs = () => {
  return (
    <>
    <div style={{marginLeft: '10px', marginRight: '10px'}}>
      <Nav/>
      <DynamicBreadcrumb/>

      <div className="about-us-title">
        <h2 style={{textAlign: 'center', fontWeight: '800', fontSize: '35px', marginTop: '6%'}}>ABOUT US</h2>
      </div>

    <div className="about-byc-africa" >
    <div className="about-byc-africa-wrap" style={{display: 'flex', flexWrap: 'wrap', marginTop: '8%',  width: '100%', gap: '2rem', justifyContent: 'center'}}>
        <div className="about-us-img">
        <img style={{height: '350px', width: '360px'}}  src={Aboutus} alt="" />
      </div>
        <div className="about-us-content" style={{ flexDirection: 'column',  marginTop: '6%'}}>
            <h3 style={{ fontWeight: '700', fontSize: '30px'}}>ABOUT BYC AFRICA</h3>
            <p style={{fontSize: '30px'}}>We are the sole distributor of BYC products in<br/> Africa. We import BYC products from Korea<br/> and distribute them to African countries<br/> through Onamik Holdings Limited.</p>
        </div>
    </div>
    </div>

    <div className="records-title">
        <h2 style={{textAlign: 'center', fontWeight: '800', fontSize: '35px', marginTop: '4%'}}>WHAT OUR RECORD SAYS</h2>
    </div>

    <div className="records">
        <div className="records-body" >
            <div className="records-row-one" style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem',  marginTop: '4%', width: '100%', justifyContent: 'center'}}>
                <div className="records-row-one-body" >
                <div className="frame-one" style={{backgroundColor: '#FFF5F5', boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', width: '300px', height: '250px', padding: '20px'}}>
                    <img style={{paddingBottom: '10px'}} src={AwardsMedal} alt="" />
                    <p style={{fontSize: '12px'}}>Gold Prize for the Best Listed Firm awarded<br/> by Daesin Economy Research Institute.</p>
                    <h3 style={{color: '#D7000F', paddingTop: '12px'}}>Year 1990</h3>
                </div>
            </div>

            
                <div className="frame-two" style={{backgroundColor: '#FBFBFB', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px', width: '300px', height: '250px', padding: '20px'}}>
                    <img style={{paddingBottom: '10px'}} src={AwardsMedal} alt="" />
                    <p style={{fontSize: '11px'}}>Selected as representaive enterprise of Korea for<br/> successful stategies on globalization of Korean brands<br/> by Korean Traders Association.</p>
                    <h3 style={{color: '#D7000F'}}>Year 1993</h3>
                </div>
            

            
                <div className="frame-three" style={{backgroundColor: '#FBFBFB', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px', width: '300px', height: '250px', padding: '20px'}}>
                    <img style={{paddingBottom: '10px'}} src={AwardsMedal} alt="" />
                    <p style={{fontSize: '12px'}}>BYC' selected as the most preferred brand for<br/> underwear by the Federation of Korean Women<br/> Economists..</p>
                    <h3 style={{color: '#D7000F'}}>Year 1997</h3>
                </div>
            </div>

            <div className="records-row-two" style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem',  marginTop: '4%', justifyContent: 'center'}}>
                <div className="records-row-two-body" >
                <div className="frame-one" style={{backgroundColor: '#FBFBFB', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px', width: '300px', height: '250px', padding: '20px'}}>
                    <img style={{paddingBottom: '10px'}} src={AwardsMedal} alt="" />
                    <p style={{fontSize: '12px'}}>Selected as the official commercializer of underwear for 1988 France Worldcup.</p>
                    <h3 style={{color: '#D7000F', paddingTop: '12px'}}>Year 1997</h3>
                </div>
            </div>

            
                <div className="frame-two" style={{backgroundColor: '#FBFBFB', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px', width: '300px', height: '250px', padding: '20px'}}>
                    <img style={{paddingBottom: '10px'}} src={AwardsMedal} alt="" />
                    <p style={{fontSize: '12px'}}>The Prize for Export of Original Brands awarded as recommended by the Korean Assoiatioon of Textile Industries</p>
                    <h3 style={{color: '#D7000F'}}>Year 1999</h3>
                </div>
            

            
                <div className="frame-three" style={{backgroundColor: '#FBFBFB', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px', width: '300px', height: '250px', padding: '20px'}}>
                    <img style={{paddingBottom: '10px'}} src={AwardsMedal} alt="" />
                    <p style={{fontSize: '12px'}}>"The 10th Prize for the Enterprise of Economical Justice" by the enterprise Assessment commission.</p>
                    <h3 style={{color: '#D7000F', paddingTop: '13px'}}>Year 2001</h3>
                </div>
            </div>

            <div className="records-row-three" style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem',  marginTop: '4%', justifyContent: 'center'}}>
                <div className="records-row-three-body" >
                <div className="frame-one" style={{backgroundColor: '#FBFBFB', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px', width: '300px', height: '250px', padding: '20px'}}>
                    <img style={{paddingBottom: '10px'}} src={AwardsMedal} alt="" />
                    <p style={{fontSize: '12px'}}>The Prize for Export of Original Brands awarded as recommended by the Korean Assoiatioon of Textile Industries</p>
                    <h3 style={{color: '#D7000F'}}>Year 2006</h3>
                </div>
            </div>

            
                <div className="frame-two" style={{backgroundColor: '#FBFBFB', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px', width: '300px', height: '250px', padding: '20px'}}>
                    <img style={{paddingBottom: '10px'}} src={AwardsMedal} alt="" />
                    <p style={{fontSize: '12px'}}>selected by korea management association as no.1 in brand influence among the men's underwear companies</p>
                    <h3 style={{color: '#D7000F'}}>Year 2006</h3>
                </div>
            

            
                <div className="frame-three" style={{backgroundColor: '#FBFBFB', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px', width: '300px', height: '250px', padding: '20px'}}>
                    <img style={{paddingBottom: '10px'}} src={AwardsMedal} alt="" />
                    <p style={{fontSize: '12px'}}>Selected as the Best Korean Enterprise of 1992 by Korean Management Association.</p>
                    <h3 style={{color: '#D7000F', paddingTop: '14px'}}>Year 2011</h3>
                </div>
            </div>
        </div>
    </div>


    <RecentlyViewed/>
    

    <Footer/>
    </div>

      
    </>
  )
}

export default AboutUs
