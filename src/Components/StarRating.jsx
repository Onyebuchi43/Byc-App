// src/components/StarRating.jsx
import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating, outOf = 5, size = 24, color = '#FBBF24' }) => {
  const percent = (Math.max(0, Math.min(rating, outOf)) / outOf) * 100;

  return (
    <div
      className="star-rating"
      style={{
        position: 'relative',
        display: 'inline-block',
        fontSize: size,
        lineHeight: 1,
      }}
    >
      {/* Empty stars */}
      <div
        className="stars-outer"
        style={{ color: '#ddd', display: 'flex', position: 'relative' }}
      >
        {Array.from({ length: outOf }).map((_, i) => (
          <FaStar key={i} className="star" />
        ))}
      </div>

      {/* Filled stars */}
      <div
        className="stars-inner"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          width: `${percent}%`,
          color,
          display: 'flex',
          pointerEvents: 'none',
        }}
      >
        {Array.from({ length: outOf }).map((_, i) => (
          <FaStar key={i} className="star" />
        ))}
      </div>

      {/* Optional: numeric rating */}
      {/* You can uncomment the next line if needed */}
      {/* <span style={{ marginLeft: 8, fontSize: 14 }}>{rating.toFixed(2)}</span> */}
    </div>
  );
};

export default StarRating;
