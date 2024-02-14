import React from "react";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const renderFullStars = () => {
    return Array.from({ length: fullStars }, (_, index) => (
      <span key={index} className="text-yellow-500">
        ★
      </span>
    ));
  };

  const renderHalfStar = () => {
    return hasHalfStar && <span className="text-yellow-500">★</span>;
  };

  return (
    <div className="flex items-center">
      {renderFullStars()}
      {renderHalfStar()}
    </div>
  );
};

export default StarRating;
