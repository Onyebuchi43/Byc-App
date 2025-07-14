import React, { useState } from 'react';
import '../style.css';
import Nav from './Nav';
import Footer from './Footer';
import DynamicBreadcrumb from './DynamicBreadCrumb';
import { BycMenBoxers } from '../images';
import StarRating from './StarRating';
import { FaTh, FaBars } from 'react-icons/fa';
import RecentlyViewed from './RecentlyViewed';

const products = Array.from({ length: 15 }, (_, index) => ({
  id: index,
  title: 'CAMISOLE',
  code: 'BYC-2598ABC',
  description: 'Long Cotton Adjustable Strap Camisole / Tank Top - white',
  price: `₦${(1900 + index * 100).toLocaleString()}.00`,
  sold: 100 - index * 2,
  image: BycMenBoxers,
  rating: 4 + (index % 2 === 0 ? 0.1 : -0.1),
}));

const AllProducts = () => {
  const [sortBy, setSortBy] = useState('sold');
  const [isGridView, setIsGridView] = useState(true);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'price') {
      return parseFloat(b.price.replace(/[₦,]/g, '')) - parseFloat(a.price.replace(/[₦,]/g, ''));
    } else {
      return b.sold - a.sold;
    }
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
    paddingBottom: '3.5rem', // <== Added space for hover buttons
  };

  const imageStyle = {
    width: isGridView ? '100%' : '150px',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
  };

  const textStyle = {
    fontSize: '14px',
    color: '#787885',
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
                  style={cardStyle}
                  onMouseEnter={(e) =>
                    (e.currentTarget.querySelector('.hover-buttons').style.display = 'flex')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.querySelector('.hover-buttons').style.display = 'none')
                  }
                >
                  <img src={product.image} alt="Camisole Product" style={imageStyle} />
                  <div style={{ padding: '0.5rem', textAlign: 'left', flex: 1 }}>
                    <h4>{product.title}</h4>
                    <p>{product.code}</p>
                    <p style={textStyle}>
                      {product.description.split('/').map((part, index, array) => (
                        <React.Fragment key={index}>
                          {part.trim()}
                          {index < array.length - 1 && ' /'}
                          {index < array.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </p>
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
                  >
                    <button
                      style={{
                        flex: 1,
                        backgroundColor: '#fff',
                        border: '1px solid #d33',
                        color: '#d33',
                        padding: '0.3rem',
                        borderRadius: '5px',
                        fontSize: '13px',
                        cursor: 'pointer',
                      }}
                    >
                      ❤️ Wishlist
                    </button>
                    <button
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
                      🛒 Buy Now
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
