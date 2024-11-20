
import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie, columns }) => {
  return (
    <div className={`col-${columns} mt-3`}>
      <div className="movie-poster">
        <img
          className="img-fluid"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>
            {movie.overview
              ? movie.overview.slice(0, 100) + "..."
              : "No description available"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
