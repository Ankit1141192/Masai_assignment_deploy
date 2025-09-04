import React from "react";
import FeedbackStars from "./FeedbackStars";

const App = () => {
  const handleRatingChange = (rating) => {
    console.log("Selected rating:", rating);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-lg rounded-xl">
        <h1 className="text-2xl font-bold mb-4">Feedback</h1>
        <FeedbackStars numberOfStars={5} onRatingChange={handleRatingChange} />
      </div>
    </div>
  );
};

export default App;
