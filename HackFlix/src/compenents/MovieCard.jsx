import React from "react";
import "./MovieCard.css";
const MovieCard = ({ movie }) => {
  return (
    <div className="col-3  mt-3">
      <img className="img-fluid " src={movie.poster_path} alt="" />
    </div>
  );
};

export default MovieCard;
