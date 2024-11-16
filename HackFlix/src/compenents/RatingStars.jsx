import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

const RatingStars = ({ setRatingParam }) => {
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rating) => {
    setRating(rating);
    console.log(rating);

    if (rating === 5) setRatingParam("&vote_average.gte=9");
    if (rating === 4) setRatingParam("&vote_average.gte=7&vote_average.lte=9");
    if (rating === 3) setRatingParam("&vote_average.gte=5&vote_average.lte=7");
    if (rating === 2) setRatingParam("&vote_average.gte=3&vote_average.lte=5");
    if (rating === 1) setRatingParam("&vote_average.lte=3");
  };

  // other logic

  // Optinal callback functions
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);

  return (
    <div className="App">
      <Rating
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        /* Available Props */
      />
    </div>
  );
};

export default RatingStars;
