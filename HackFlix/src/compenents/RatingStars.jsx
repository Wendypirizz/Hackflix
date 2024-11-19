import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

const RatingStars = ({ setRatingParam }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (rating) => {
    setRating(rating);
    console.log(rating);

    if (rating === 5) setRatingParam("&vote_average.gte=9");
    if (rating === 4) setRatingParam("&vote_average.gte=7&vote_average.lte=9");
    if (rating === 3) setRatingParam("&vote_average.gte=5&vote_average.lte=7");
    if (rating === 2) setRatingParam("&vote_average.gte=3&vote_average.lte=5");
    if (rating === 1) setRatingParam("&vote_average.lte=3");
  };

  return (
    <div className="App">
      <Rating onClick={handleRating} />
    </div>
  );
};

export default RatingStars;
