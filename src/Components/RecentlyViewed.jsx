import React from 'react'
import '../style.css'
import StarRating from './StarRating'
import { BycMenBoxers } from '../images';

const RecentlyViewed = () => {

    const recentlyViewedProducts = [
  {
    id: 1,
    title: 'MEN BOXERS',
    code: 'BYC 1163',
    description: "Fashionable Men's Underwear Boxer Cotton Underwear 3 In 1",
    price: 1900,
    image: BycMenBoxers,
    rating: 4.05,
  },
  {
    id: 2,
    title: 'MEN BOXERS',
    code: 'BYC 1163',
    description: "Fashionable Men's Underwear Boxer Cotton Underwear 3 In 1",
    price: 1900,
    image: BycMenBoxers,
    rating: 4.05,
  },
  {
    id: 3,
    title: 'MEN BOXERS',
    code: 'BYC 1163',
    description: "Fashionable Men's Underwear Boxer Cotton Underwear 3 In 1",
    price: 1900,
    image: BycMenBoxers,
    rating: 4.05,
  },
  {
    id: 4,
    title: 'MEN BOXERS',
    code: 'BYC 1163',
    description: "Fashionable Men's Underwear Boxer Cotton Underwear 3 In 1",
    price: 1900,
    image: BycMenBoxers,
    rating: 4.05,
  },
  {
    id: 5,
    title: 'MEN BOXERS',
    code: 'BYC 1163',
    description: "Fashionable Men's Underwear Boxer Cotton Underwear 3 In 1",
    price: 1900,
    image: BycMenBoxers,
    rating: 4.5,
  },
];
  return (
    <>
     <div className="recently-viewed container" style={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', marginTop: '8%', borderTopRightRadius: '20px', borderTopLeftRadius: '20px', borderBottomRightRadius: '20px', borderBottomLeftRadius: '20px',width: '70%', paddingBottom: '2rem', width: '100%'}}>
        <div className="recently-viewed-body">
            <div className="recently-viewed-title" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                <h3 style={{ fontWeight: '700', fontSize: '20px'}}>Recently Viewed</h3>
                <p style={{cursor: 'pointer'}}>See all &gt;</p>
            </div>

            <hr className="divider" />


            <div className="recently-viewed-products">
                <div className="recently-viewed-products-wrap" style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center'}}>
                    <div className="product-card-one">
                        <img style={{borderTopRightRadius: '20px', borderTopLeftRadius: '20px'}} src={BycMenBoxers} alt="" />
                        <h4>MEN BOXERS</h4>
                        <p>BYC 1163</p>
                        <p style={{fontSize: '14px', color: '#787885'}}>Fashionable Men's Underwear Boxer<br/> Cotton Underwear 3 In 1</p>
                        <div className="product-price">
                            <h4>₦1,900.00</h4>
                        </div>
                        <div className="rating">
                            <StarRating rating={4.05} color="#FBBF24" /> 
                        </div>
                    </div>


                    <div className="product-card-two">
                        <img style={{borderTopRightRadius: '20px', borderTopLeftRadius: '20px'}} src={BycMenBoxers} alt="" />
                        <h4>MEN BOXERS</h4>
                        <p>BYC 1163</p>
                        <p style={{fontSize: '14px', color: '#787885'}}>Fashionable Men's Underwear Boxer<br/> Cotton Underwear 3 In 1</p>
                        <div className="product-price">
                            <h4>₦1,900.00</h4>
                        </div>
                        <div className="rating">
                            <StarRating rating={4.05}  color="#FBBF24" /> 
                        </div>
                    </div>


                    <div className="product-card-three">
                        <img style={{borderTopRightRadius: '20px', borderTopLeftRadius: '20px'}} src={BycMenBoxers} alt="" />
                        <h4>MEN BOXERS</h4>
                        <p>BYC 1163</p>
                        <p style={{fontSize: '14px', color: '#787885'}}>Fashionable Men's Underwear Boxer<br/> Cotton Underwear 3 In 1</p>
                        <div className="product-price">
                            <h4>₦1,900.00</h4>
                        </div>
                        <div className="rating">
                            <StarRating rating={4.05}  color="#FBBF24" /> 
                        </div>
                    </div>


                    <div className="product-card-four">
                        <img style={{borderTopRightRadius: '20px', borderTopLeftRadius: '20px'}} src={BycMenBoxers} alt="" />
                        <h4>MEN BOXERS</h4>
                        <p>BYC 1163</p>
                        <p style={{fontSize: '14px', color: '#787885'}}>Fashionable Men's Underwear Boxer<br/> Cotton Underwear 3 In 1</p>
                        <div className="product-price">
                            <h4>₦1,900.00</h4>
                        </div>
                        <div className="rating">
                            <StarRating rating={4.05}  color="#FBBF24" />
                        </div>
                    </div>


                    <div className="product-card-five">
                        <img style={{borderTopRightRadius: '20px', borderTopLeftRadius: '20px'}} src={BycMenBoxers} alt="" />
                        <h4>MEN BOXERS</h4>
                        <p>BYC 1163</p>
                        <p style={{fontSize: '14px', color: '#787885'}}>Fashionable Men's Underwear Boxer<br/> Cotton Underwear 3 In 1</p>
                        <div className="product-price">
                            <h4>₦1,900.00</h4>
                        </div>
                        <div className="rating">
                            <StarRating rating={4.5} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default RecentlyViewed