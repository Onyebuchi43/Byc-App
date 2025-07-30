import React from 'react';
import { useLocation } from 'react-router-dom';
import StarRating from './StarRating';

const reviewData = {
  totalRatings: 1129,
  averageRating: 4.5,
  ratingDistribution: {
    5: 600,
    4: 250,
    3: 150,
    2: 80,
    1: 49,
  },
  reviews: [
    {
      id: 1,
      user: 'JAMES JOHN',
      header: 'Good product',
      comment: 'The product lasts, the design is perfect. I love it!',
      date: '12-08-2021',
      rating: 5,
    },
    {
      id: 2,
      user: 'JAMES JOHN',
      header: 'Good product',
      comment: 'The product lasts, the design is perfect. I love it!',
      date: '12-08-2021',
      rating: 5,
    },
    {
      id: 3,
      user: 'JAMES JOHN',
      header: 'Looks nice',
      comment: 'The product lasts, the design is perfect. I love it!',
      date: '12-08-2021',
      rating: 5,
    },
  ],
};

const getBarWidth = (count) => {
  const max = Math.max(...Object.values(reviewData.ratingDistribution));
  return `${(count / max) * 100}%`;
};

const ReviewSection = () => {
  const location = useLocation();
  const product = location.state?.product;

  return (
    <div className='conatiner' style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', marginTop: '8%', alignItems: 'center' }}>
      <div className= 'container'>
      <h2 style={{ marginBottom: '1rem' }}>Customer Reviews</h2>

      <p style={{ fontWeight: 'bold' }}>PRODUCT RATINGS ({reviewData.totalRatings})</p>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', margin: '1rem 0' }}>
        {/* Average Rating Box */}
        <div style={{
          backgroundColor: '#f7f7f7',
          padding: '1.5rem',
          borderRadius: '10px',
          textAlign: 'center',
          width: '120px',
        }}>
          <h2 style={{ margin: 0 }}>{reviewData.averageRating}/5.0</h2>
          <div style={{ color: 'orange', fontSize: '1.5rem', marginTop: '0.5rem' }}>
            <StarRating rating={reviewData.averageRating} />
          </div>
        </div>

        {/* Star Distribution Bars */}
        <div style={{ flexGrow: 1 }}>
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
              <span style={{ width: '20px' }}>{star}★</span>
              <div style={{
                flexGrow: 1,
                backgroundColor: '#eee',
                height: '8px',
                margin: '0 8px',
                borderRadius: '5px',
              }}>
                <div style={{
                  width: getBarWidth(reviewData.ratingDistribution[star]),
                  backgroundColor: 'orange',
                  height: '100%',
                  borderRadius: '5px',
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '2rem',
      }}>
        <p style={{ fontWeight: 'bold' }}>PRODUCT REVIEWS ({reviewData.reviews.length})</p>
        <p style={{ color: 'darkred', cursor: 'pointer', fontWeight: 'bold' }}>See all &gt;</p>
      </div>

      {/* Reviews List */}
      <div>
        {reviewData.reviews.map((review) => (
          <div key={review.id} style={{ marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>{review.header}</h4>
            <p style={{ margin: 0 }}>{review.comment}</p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              color: 'gray',
              marginTop: '0.5rem',
            }}>
              <div style={{ color: 'orange' }}>
                <StarRating rating={review.rating} />
              </div>
              <small>{review.date} by {review.user}</small>
            </div>
            <hr style={{ marginTop: '1rem', borderColor: '#eee' }} />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default ReviewSection;
