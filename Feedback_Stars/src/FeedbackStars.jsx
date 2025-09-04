import React, { useState } from "react";

const FeedbackStars = ({ numberOfStars = 5, onRatingChange }) => {
  const [rating, setRating] = useState(0); 
  const [hover, setHover] = useState(0);

  const handleClick = (star) => {
    setRating(star);
    if (onRatingChange) {
      onRatingChange(star);
    }
  };

  const handleClear = () => {
    setRating(0);
    if (onRatingChange) {
      onRatingChange(0);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Stars */}
      <div className="flex space-x-2">
        {[...Array(numberOfStars)].map((_, index) => {
          const starValue = index + 1;
          return (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={
                starValue <= (hover || rating) ? "gold" : "none"
              }
              stroke="gray"
              strokeWidth="2"
              className="w-8 h-8 cursor-pointer"
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(0)}
              onClick={() => handleClick(starValue)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.09 6.418a1 1 0 00.95.69h6.708c.969 0 1.371 1.24.588 1.81l-5.426 3.944a1 1 0 00-.364 1.118l2.09 6.418c.3.921-.755 1.688-1.54 1.118l-5.426-3.944a1 1 0 00-1.176 0l-5.426 3.944c-.785.57-1.84-.197-1.54-1.118l2.09-6.418a1 1 0 00-.364-1.118L2.713 11.845c-.783-.57-.38-1.81.588-1.81h6.708a1 1 0 00.95-.69l2.09-6.418z"
              />
            </svg>
          );
        })}
      </div>

      <p className="text-lg font-medium text-gray-700">
        {rating > 0
          ? `You rated: ${rating}/${numberOfStars}`
          : "No rating selected"}
      </p>
      {rating > 0 && (
        <button
          onClick={handleClear}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Clear Rating
        </button>
      )}
    </div>
  );
};

export default FeedbackStars;
