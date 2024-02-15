import React, { useState } from "react";
import StarRating from "./StarRating";

const ReviewForm = ({ onSubmit }) => {
  const [review, setReview] = useState({
    name: "",
    email: "",
    rating: 0,
    comment: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  const handleRatingChange = (newRating) => {
    setReview((prevReview) => ({
      ...prevReview,
      rating: newRating,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(review);
    setReview({
      name: "",
      email: "",
      rating: 0,
      comment: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl mt-6 mb-2 font-bold">Leave a Review</h2>
      <input
        type="text"
        name="name"
        value={review.name}
        onChange={handleInputChange}
        placeholder="Your Name"
        className="w-full border border-gray-300 p-2 mb-2 rounded"
        required
      />
      <input
        type="email"
        name="email"
        value={review.email}
        onChange={handleInputChange}
        placeholder="Your Email"
        className="w-full border border-gray-300 p-2 mb-2 rounded"
        required
      />
      <StarRating rating={review.rating} onRatingChange={handleRatingChange} />
      <textarea
        name="comment"
        value={review.comment}
        onChange={handleInputChange}
        placeholder="Your Comment"
        className="w-full border border-gray-300 p-2 mb-2 rounded"
        required
      ></textarea>
      <button
        type="submit"
        className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
      >
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;
