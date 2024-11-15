import React from "react";
import "./MovieCard.css";
const MovieCard = ({ movie }) => {
  return (
    <div className="col-3  mt-3">
      <img
        className="img-fluid"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
    </div>
  );
};

export default MovieCard;
