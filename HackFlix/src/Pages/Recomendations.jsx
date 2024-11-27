import React from "react";
import reviews from "../Movies.json";
import ReviewCard from "../compenents/ReviewCard";

const Recomendations = () => {
  return (
    <div className="container text-center bg-transparent mt-5">
      <div className="">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Recomendations;
