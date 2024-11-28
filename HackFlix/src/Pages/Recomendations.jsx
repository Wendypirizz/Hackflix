import React, { useState } from "react";
import movieReviews from "../Movies.json";
import ReviewCard from "../compenents/ReviewCard";
import AlphabeticOrderer from "../compenents/AlphabeticOrderer";

const Recomendations = () => {
  const [reviews, setReviews] = useState(movieReviews);

  return (
    <div className="container text-center bg-transparent mt-5">
      <div className="d-flex align-items-start">
        <AlphabeticOrderer setReviews={setReviews} />
      </div>
      <div className="container">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Recomendations;
