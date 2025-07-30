import React, { useState, useEffect } from 'react';
import '../style.css';
import Nav from './Nav';
import Footer from './Footer';
import DynamicBreadcrumb from './DynamicBreadCrumb';
import { BycMenBoxers } from '../images';
import StarRating from './StarRating';
import { FaTh, FaBars } from 'react-icons/fa';
import RecentlyViewed from './RecentlyViewed';
import { useNavigate } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

// Sample Product Data (with unique IDs)
const products = [
  {
    id: 0,
    title: 'CAMISOLE',
    code: 'BYC-2598ABC',
    description: 'Long Cotton Adjustable Strap Camisole in white. Perfect for layering or lounging.',
    fullDescription: 'This set of boxers will make you feel comfortable. The hem doesn’t ravel. It is made from cotton which allows aeration around your body. It suitable for both adults and teenagers.These pair of boxers give good fit and sits appropriately, they ensure there is no unsightly bulge and they also give support to an important part of your body, which overall improves your confidence. It has a comfortable cotton material. It comes in different beautiful colors and patterns.  It has cool and comfortable fit with flexible hem that doesn’t ravel and comes tag -free for maximum comfort. Soft breathable fabric for air movement and forms to your body for best Fit. It is made of 100% premium cotton and is perfect for crotch, so you don’t have to worry about ugly bumps. For pure organic softness and premium lingerie support, pair this four-in-one suit with yourself or the special man in your life.',
    price: '1,900.00',
    sold: 100,
    image: BycMenBoxers,
    rating: 4.1,
  },
  {
    id: 1,
    title: 'MEN BOXERS',
    code: 'BYC-1166',
    description: '100% Cotton Pack of 12 Comfortable Mens Boxers for everyday wear.',
    fullDescription: 'This set of boxers will make you feel comfortable. The hem doesn’t ravel. It is made from cotton which allows aeration around your body. It suitable for both adults and teenagers.These pair of boxers give good fit and sits appropriately, they ensure there is no unsightly bulge and they also give support to an important part of your body, which overall improves your confidence. It has a comfortable cotton material. It comes in different beautiful colors and patterns.  It has cool and comfortable fit with flexible hem that doesn’t ravel and comes tag -free for maximum comfort. Soft breathable fabric for air movement and forms to your body for best Fit. It is made of 100% premium cotton and is perfect for crotch, so you don’t have to worry about ugly bumps. For pure organic softness and premium lingerie support, pair this four-in-one suit with yourself or the special man in your life.',
    price: '2,000.00',
    sold: 98,
    image: BycMenBoxers,
    rating: 3.9,
  },
  {
    id: 2,
    title: 'SPORTS BRA',
    code: 'BYC-SPBR',
    description: 'Seamless high support sports bra. Breathable and durable design.',
    fullDescription: 'This set of boxers will make you feel comfortable. The hem doesn’t ravel. It is made from cotton which allows aeration around your body. It suitable for both adults and teenagers.These pair of boxers give good fit and sits appropriately, they ensure there is no unsightly bulge and they also give support to an important part of your body, which overall improves your confidence. It has a comfortable cotton material. It comes in different beautiful colors and patterns.  It has cool and comfortable fit with flexible hem that doesn’t ravel and comes tag -free for maximum comfort. Soft breathable fabric for air movement and forms to your body for best Fit. It is made of 100% premium cotton and is perfect for crotch, so you don’t have to worry about ugly bumps. For pure organic softness and premium lingerie support, pair this four-in-one suit with yourself or the special man in your life.',
    price: '2,100.00',
    sold: 96,
    image: BycMenBoxers,
    rating: 4.0,
  },
  {
    id: 3,
    title: 'SLEEVELESS TEE',
    code: 'BYC-SLT10',
    description: 'Lightweight sleeveless cotton tee for men. Perfect for casual wear.',
    fullDescription: 'This set of boxers will make you feel comfortable. The hem doesn’t ravel. It is made from cotton which allows aeration around your body. It suitable for both adults and teenagers.These pair of boxers give good fit and sits appropriately, they ensure there is no unsightly bulge and they also give support to an important part of your body, which overall improves your confidence. It has a comfortable cotton material. It comes in different beautiful colors and patterns.  It has cool and comfortable fit with flexible hem that doesn’t ravel and comes tag -free for maximum comfort. Soft breathable fabric for air movement and forms to your body for best Fit. It is made of 100% premium cotton and is perfect for crotch, so you don’t have to worry about ugly bumps. For pure organic softness and premium lingerie support, pair this four-in-one suit with yourself or the special man in your life.',
    price: '2,200.00',
    sold: 94,
    image: BycMenBoxers,
    rating: 4.2,
  },
  {
    id: 4,
    title: 'BOY’S BRIEFS',
    code: 'BYC-BRB12',
    description: 'Pack of 12 boy’s briefs made with soft breathable cotton fabric.',
    fullDescription: 'This set of boxers will make you feel comfortable. The hem doesn’t ravel. It is made from cotton which allows aeration around your body. It suitable for both adults and teenagers.These pair of boxers give good fit and sits appropriately, they ensure there is no unsightly bulge and they also give support to an important part of your body, which overall improves your confidence. It has a comfortable cotton material. It comes in different beautiful colors and patterns.  It has cool and comfortable fit with flexible hem that doesn’t ravel and comes tag -free for maximum comfort. Soft breathable fabric for air movement and forms to your body for best Fit. It is made of 100% premium cotton and is perfect for crotch, so you don’t have to worry about ugly bumps. For pure organic softness and premium lingerie support, pair this four-in-one suit with yourself or the special man in your life.',
    price: '2,300.00',
    sold: 92,
    image: BycMenBoxers,
    rating: 3.8,
  },
  {
    id: 5,
    title: 'BOY’S BRIEFS 2',
    code: 'BYC-BRB13',
    description: 'Colorful cotton boy’s briefs pack with extra comfort.',
    fullDescription: 'This set of boxers will make you feel comfortable. The hem doesn’t ravel. It is made from cotton which allows aeration around your body. It suitable for both adults and teenagers.These pair of boxers give good fit and sits appropriately, they ensure there is no unsightly bulge and they also give support to an important part of your body, which overall improves your confidence. It has a comfortable cotton material. It comes in different beautiful colors and patterns.  It has cool and comfortable fit with flexible hem that doesn’t ravel and comes tag -free for maximum comfort. Soft breathable fabric for air movement and forms to your body for best Fit. It is made of 100% premium cotton and is perfect for crotch, so you don’t have to worry about ugly bumps. For pure organic softness and premium lingerie support, pair this four-in-one suit with yourself or the special man in your life.',
    price: '2,400.00',
    sold: 89,
    image: BycMenBoxers,
    rating: 3.7,
  },
    {
    id: 6,
    title: 'BOY’S BRIEFS 2',
    code: 'BYC-BRB13',
    description: 'Colorful cotton boy’s briefs pack with extra comfort.',
    fullDescription: 'This set of boxers will make you feel comfortable. The hem doesn’t ravel. It is made from cotton which allows aeration around your body. It suitable for both adults and teenagers.These pair of boxers give good fit and sits appropriately, they ensure there is no unsightly bulge and they also give support to an important part of your body, which overall improves your confidence. It has a comfortable cotton material. It comes in different beautiful colors and patterns.  It has cool and comfortable fit with flexible hem that doesn’t ravel and comes tag -free for maximum comfort. Soft breathable fabric for air movement and forms to your body for best Fit. It is made of 100% premium cotton and is perfect for crotch, so you don’t have to worry about ugly bumps. For pure organic softness and premium lingerie support, pair this four-in-one suit with yourself or the special man in your life.',
    price: '2,400.00',
    sold: 89,
    image: BycMenBoxers,
    rating: 3.7,
  },
    {
    id: 7,
    title: 'BOY’S BRIEFS 2',
    code: 'BYC-BRB13',
    description: 'Colorful cotton boy’s briefs pack with extra comfort.',
    fullDescription: 'This set of boxers will make you feel comfortable. The hem doesn’t ravel. It is made from cotton which allows aeration around your body. It suitable for both adults and teenagers.These pair of boxers give good fit and sits appropriately, they ensure there is no unsightly bulge and they also give support to an important part of your body, which overall improves your confidence. It has a comfortable cotton material. It comes in different beautiful colors and patterns.  It has cool and comfortable fit with flexible hem that doesn’t ravel and comes tag -free for maximum comfort. Soft breathable fabric for air movement and forms to your body for best Fit. It is made of 100% premium cotton and is perfect for crotch, so you don’t have to worry about ugly bumps. For pure organic softness and premium lingerie support, pair this four-in-one suit with yourself or the special man in your life.',
    price: '2,400.00',
    sold: 89,
    image: BycMenBoxers,
    rating: 3.7,
  },
    {
    id: 8,
    title: 'BOY’S BRIEFS 2',
    code: 'BYC-BRB13',
    description: 'Colorful cotton boy’s briefs pack with extra comfort.',
    fullDescription: 'This set of boxers will make you feel comfortable. The hem doesn’t ravel. It is made from cotton which allows aeration around your body. It suitable for both adults and teenagers.These pair of boxers give good fit and sits appropriately, they ensure there is no unsightly bulge and they also give support to an important part of your body, which overall improves your confidence. It has a comfortable cotton material. It comes in different beautiful colors and patterns.  It has cool and comfortable fit with flexible hem that doesn’t ravel and comes tag -free for maximum comfort. Soft breathable fabric for air movement and forms to your body for best Fit. It is made of 100% premium cotton and is perfect for crotch, so you don’t have to worry about ugly bumps. For pure organic softness and premium lingerie support, pair this four-in-one suit with yourself or the special man in your life.',
    price: '2,400.00',
    sold: 89,
    image: BycMenBoxers,
    rating: 3.7,
  },
    {
    id: 9,
    title: 'BOY’S BRIEFS 2',
    code: 'BYC-BRB13',
    description: 'Colorful cotton boy’s briefs pack with extra comfort.',
    fullDescription: 'This set of boxers will make you feel comfortable. The hem doesn’t ravel. It is made from cotton which allows aeration around your body. It suitable for both adults and teenagers.These pair of boxers give good fit and sits appropriately, they ensure there is no unsightly bulge and they also give support to an important part of your body, which overall improves your confidence. It has a comfortable cotton material. It comes in different beautiful colors and patterns.  It has cool and comfortable fit with flexible hem that doesn’t ravel and comes tag -free for maximum comfort. Soft breathable fabric for air movement and forms to your body for best Fit. It is made of 100% premium cotton and is perfect for crotch, so you don’t have to worry about ugly bumps. For pure organic softness and premium lingerie support, pair this four-in-one suit with yourself or the special man in your life.',
    price: '2,400.00',
    sold: 89,
    image: BycMenBoxers,
    rating: 3.7,
  },
    {
    id: 10,
    title: 'BOY’S BRIEFS 2',
    code: 'BYC-BRB13',
    description: 'Colorful cotton boy’s briefs pack with extra comfort.',
    fullDescription: 'This set of boxers will make you feel comfortable. The hem doesn’t ravel. It is made from cotton which allows aeration around your body. It suitable for both adults and teenagers.These pair of boxers give good fit and sits appropriately, they ensure there is no unsightly bulge and they also give support to an important part of your body, which overall improves your confidence. It has a comfortable cotton material. It comes in different beautiful colors and patterns.  It has cool and comfortable fit with flexible hem that doesn’t ravel and comes tag -free for maximum comfort. Soft breathable fabric for air movement and forms to your body for best Fit. It is made of 100% premium cotton and is perfect for crotch, so you don’t have to worry about ugly bumps. For pure organic softness and premium lingerie support, pair this four-in-one suit with yourself or the special man in your life.',
    price: '2,400.00',
    sold: 89,
    image: BycMenBoxers,
    rating: 3.7,
  },
    {
    id: 11,
    title: 'BOY’S BRIEFS 2',
    code: 'BYC-BRB13',
    description: 'Colorful cotton boy’s briefs pack with extra comfort.',
    fullDescription: 'This set of boxers will make you feel comfortable. The hem doesn’t ravel. It is made from cotton which allows aeration around your body. It suitable for both adults and teenagers.These pair of boxers give good fit and sits appropriately, they ensure there is no unsightly bulge and they also give support to an important part of your body, which overall improves your confidence. It has a comfortable cotton material. It comes in different beautiful colors and patterns.  It has cool and comfortable fit with flexible hem that doesn’t ravel and comes tag -free for maximum comfort. Soft breathable fabric for air movement and forms to your body for best Fit. It is made of 100% premium cotton and is perfect for crotch, so you don’t have to worry about ugly bumps. For pure organic softness and premium lingerie support, pair this four-in-one suit with yourself or the special man in your life.',
    price: '2,400.00',
    sold: 89,
    image: BycMenBoxers,
    rating: 3.7,
  },
    {
    id: 12,
    title: 'BOY’S BRIEFS 2',
    code: 'BYC-BRB13',
    description: 'Colorful cotton boy’s briefs pack with extra comfort.',
    fullDescription: 'This set of boxers will make you feel comfortable. The hem doesn’t ravel. It is made from cotton which allows aeration around your body. It suitable for both adults and teenagers.These pair of boxers give good fit and sits appropriately, they ensure there is no unsightly bulge and they also give support to an important part of your body, which overall improves your confidence. It has a comfortable cotton material. It comes in different beautiful colors and patterns.  It has cool and comfortable fit with flexible hem that doesn’t ravel and comes tag -free for maximum comfort. Soft breathable fabric for air movement and forms to your body for best Fit. It is made of 100% premium cotton and is perfect for crotch, so you don’t have to worry about ugly bumps. For pure organic softness and premium lingerie support, pair this four-in-one suit with yourself or the special man in your life.',
    price: '2,400.00',
    sold: 89,
    image: BycMenBoxers,
    rating: 3.7,
  },
    {
    id: 13,
    title: 'BOY’S BRIEFS 2',
    code: 'BYC-BRB13',
    description: 'Colorful cotton boy’s briefs pack with extra comfort.',
    fullDescription: 'This set of boxers will make you feel comfortable. The hem doesn’t ravel. It is made from cotton which allows aeration around your body. It suitable for both adults and teenagers.These pair of boxers give good fit and sits appropriately, they ensure there is no unsightly bulge and they also give support to an important part of your body, which overall improves your confidence. It has a comfortable cotton material. It comes in different beautiful colors and patterns.  It has cool and comfortable fit with flexible hem that doesn’t ravel and comes tag -free for maximum comfort. Soft breathable fabric for air movement and forms to your body for best Fit. It is made of 100% premium cotton and is perfect for crotch, so you don’t have to worry about ugly bumps. For pure organic softness and premium lingerie support, pair this four-in-one suit with yourself or the special man in your life.',
    price: '2,400.00',
    sold: 89,
    image: BycMenBoxers,
    rating: 3.7,
  },
    {
    id: 14,
    title: 'BOY’S BRIEFS 2',
    code: 'BYC-BRB13',
    description: 'Colorful cotton boy’s briefs pack with extra comfort.',
    fullDescription: 'This set of boxers will make you feel comfortable. The hem doesn’t ravel. It is made from cotton which allows aeration around your body. It suitable for both adults and teenagers.These pair of boxers give good fit and sits appropriately, they ensure there is no unsightly bulge and they also give support to an important part of your body, which overall improves your confidence. It has a comfortable cotton material. It comes in different beautiful colors and patterns.  It has cool and comfortable fit with flexible hem that doesn’t ravel and comes tag -free for maximum comfort. Soft breathable fabric for air movement and forms to your body for best Fit. It is made of 100% premium cotton and is perfect for crotch, so you don’t have to worry about ugly bumps. For pure organic softness and premium lingerie support, pair this four-in-one suit with yourself or the special man in your life.',
    price: '2,400.00',
    sold: 89,
    image: BycMenBoxers,
    rating: 3.7,
  },
  // Add more products as needed
];

const AllProducts = () => {

    const [wishlist, setWishlist] = useState(() => {
  const saved = localStorage.getItem('wishlist');
  return saved ? JSON.parse(saved) : [];
});

const toggleWishlist = (product) => {
  const isInWishlist = wishlist.some(item => item.id === product.id);
  let updatedWishlist;

  if (isInWishlist) {
    updatedWishlist = wishlist.filter(item => item.id !== product.id);
  } else {
    updatedWishlist = [...wishlist, product];
  }

  setWishlist(updatedWishlist);
  localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
};

  const navigate = useNavigate();

  const [sortBy, setSortBy] = useState('sold');
  const [isGridView, setIsGridView] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'price') {
      return parseFloat(b.price.replace(/[₦,]/g, '')) - parseFloat(a.price.replace(/[₦,]/g, ''));
    }
    return b.sold - a.sold;
  });

  const cardStyle = {
    width: isGridView ? '19%' : '100%',
    display: 'flex',
    flexDirection: isGridView ? 'column' : 'row',
    alignItems: isGridView ? 'initial' : 'center',
    minWidth: '180px',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    borderRadius: '10px',
    overflow: 'hidden',
    gap: isGridView ? '0' : '1rem',
    position: 'relative',
    transition: '0.3s',
    backgroundColor: '#fff',
    cursor: 'pointer',
  };

  const imageStyle = {
    width: isGridView ? '100%' : '150px',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
  };

  const containerStyle = {
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    marginTop: '8%',
    borderRadius: '20px',
    width: '100%',
    paddingBottom: '2rem',
  };

  const rowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: isGridView ? 'center' : 'flex-start',
    marginBottom: '60px',
  };

  return (
    <>
      <Nav />
      <DynamicBreadcrumb />

      <div className="all-products container" style={containerStyle}>
        <div className="all-products-body">
          <div className="all-products-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontWeight: '700', fontSize: '20px' }}>All Products</h3>
           <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <label htmlFor="sort" style={{ fontSize: '12px', fontWeight: 'bold' }}>SORT BY</label>
              <select id="sort" onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
                <option value="sold">Most Sold</option>
                <option value="price">Price</option>
              </select>
              <button onClick={() => setIsGridView(false)} style={{ padding: '5px', background: !isGridView ? '#eee' : 'white' }}>
                <FaBars />
              </button>
              <button onClick={() => setIsGridView(true)} style={{ padding: '5px', background: isGridView ? '#eee' : 'white' }}>
                <FaTh />
              </button>
            </div>
          </div>

          <hr className="divider" />

          <div className="products-cards">
            <div className="product-cards-body" style={rowStyle}>
              {sortedProducts.map((product) => (
                <div
                key={product.id}
                className="product-card"
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.classList.add('card-hovered');
                  e.currentTarget.querySelector('.hover-buttons').style.display = 'flex';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.classList.remove('card-hovered');
                  e.currentTarget.querySelector('.hover-buttons').style.display = 'none';
                  }}
                  onClick={()=> navigate(`/cart/${product.id}`, {state: {product} })}
                  >

                  <img src={product.image} alt={product.title} style={imageStyle} />
                  <div style={{ padding: '0.5rem', textAlign: 'left', flex: 1 }}>
                    <h4>{product.title}</h4>
                    <p>{product.code}</p>
                    <p style={{ fontSize: '14px', color: '#787885' }}>{product.description}</p>
                    <div className="product-price">
                      <h4>{product.price}</h4>
                    </div>
                    <div className="rating">
                      <StarRating rating={product.rating} color="#FBBF24" />
                    </div>
                  </div>

                  {/* Hover Buttons */}
                  <div
                    className="hover-buttons"
                    style={{
                      display: 'none',
                      position: 'absolute',
                      bottom: '10px',
                      left: '10px',
                      right: '10px',
                      justifyContent: 'space-between',
                      gap: '0.5rem',
                    }}
                    onClick={(e) => e.stopPropagation() }
                  >
                    <button 
                      onClick={() => toggleWishlist(product)}
                      style={{
                        flex: 1,
                        backgroundColor: '#fff',
                        border: '1px solid #d33',
                        color: wishlist.some(item => item.id === product.id) ? 'red' : '#d33',
                        padding: '0.3rem',
                        borderRadius: '5px',
                        fontSize: '13px',
                        cursor: 'pointer',
                      }}
                      aria-label="Toggle Wishlist"
                    >
                      {wishlist.some(item => item.id === product.id) ? (
                        <AiFillHeart />
                      ) : (
                      <AiOutlineHeart />
                      )} Wishlist
                    </button>
                    <button
                      onClick={() => navigate('/checkout', { state: { product } })}
                      style={{
                        flex: 1,
                        backgroundColor: '#d33',
                        color: '#fff',
                        padding: '0.3rem',
                        border: 'none',
                        borderRadius: '5px',
                        fontSize: '13px',
                        cursor: 'pointer',
                      }}
                    >
                      <i className="bi bi-cart"></i> Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <RecentlyViewed />
      <Footer />
    </>
  );
};

export default AllProducts;