// src/components/MovieCard.jsx
import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie, columns }) => {
  return (
    <div className={`col-${columns} mt-3`}>
      <img
        className="img-fluid"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
    </div>
  );
};

export default MovieCard;
