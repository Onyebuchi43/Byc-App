// src/components/StarRating.jsx
import React from 'react';
import { FaStar } from 'react-icons/fa';
import '../style.css';

const StarRating = ({ rating, outOf = 5, size = 24, color = '#FBBF24' }) => {
  // compute percentage of filled stars
  const percent = (Math.max(0, Math.min(rating, outOf)) / outOf) * 100;

  return (
    <div className="star-rating" style={{ fontSize: size }}>
      {/* empty stars background */}
      <div className="stars-outer">
        {Array.from({ length: outOf }).map((_, i) => (
          <FaStar key={i} className="star" color="#ddd" />
        ))}
      </div>
      {/* filled stars overlay, clipped by width */}
      <div
        className="stars-inner"
        style={{ width: `${percent}%`, color }}
      >
        {Array.from({ length: outOf }).map((_, i) => (
          <FaStar key={i} className="star" />
        ))}
      </div>
      {/* numeric score */}
      <span className="rating-value">{rating.toFixed(2)}</span>
    </div>
  );
};

export default StarRating;