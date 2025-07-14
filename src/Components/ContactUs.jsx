import React from 'react'
import '../style.css'
import Nav from './Nav'
import Footer from './Footer'
import RecentlyViewed from './RecentlyViewed'
import DynamicBreadcrumb from './DynamicBreadCrumb';
import { Map, AddressIcon, PhoneCallIcon, EmailIcon } from '../images';
import MapView from './MapView';
import ContactForm from './ContactForm'

const ContactUs = () => {
  return (
    <>
      <Nav/>
        <DynamicBreadcrumb/>

        <div className="contact-us-title">
        <h2 style={{textAlign: 'center', fontWeight: '800', fontSize: '35px', marginTop: '6%'}}>CONTACT US</h2>
      </div>

      <div className="container" style={{marginTop: '6%'}}>
        <MapView/>
      </div>

      <div className="contact-info">
        <div className="contact-info-wrap container" style={{display: 'flex', flexWrap: 'wrap', backgroundColor: '#FBFBFB', marginTop: '6%', padding: '30px', gap: '2rem'}}>
                <div className="address" style={{display: 'flex', flexWrap: 'wrap', gap: '1rem'}}>
                    <div>
                        <img style={{backgroundColor: '#BD3A3A17', border: '30px', borderRadius: '20px', padding: '30px'}} src={AddressIcon} alt="" />
                    </div>
                    <div>
                        <h3 style={{ fontWeight: '700', fontSize: '30px'}}>ADDRESS</h3>
                        <p>( Head Office )</p>
                        <p>175 Cameroun Road Aba, Abia State.</p>
                    </div>
                </div>


            <div className="phone" style={{display: 'flex', flexWrap: 'wrap', gap: '1rem'}}>
                <div><img style={{backgroundColor: '#BD3A3A17', border: '30px', borderRadius: '20px', padding: '30px'}} src={PhoneCallIcon} alt="" /></div>
                <div style={{paddingTop: '20px'}}>
                    <h3 style={{ fontWeight: '700', fontSize: '30px'}}>PHONE</h3>
                    <p>08101375376 09053403403</p>
                </div>
            </div>


            <div className="email" style={{display: 'flex', flexWrap: 'wrap', gap: '1rem'}}>
                <div>
                    <img style={{backgroundColor: '#BD3A3A17', border: '30px', borderRadius: '20px', padding: '30px'}} src={EmailIcon} alt="" />
                </div>
                <div style={{paddingTop: '20px'}}>
                    <h3 style={{ fontWeight: '700', fontSize: '30px'}}>EMAIL ADDRESS</h3>
                    <p>BYCAFRICA@gmail.com</p>
                </div>
            </div>

        </div>
      </div>

      <div className="form-wrapper">
       <ContactForm />
      </div>

      

      <RecentlyViewed/>
      <Footer/>

    </>
  )
}

export default ContactUs
