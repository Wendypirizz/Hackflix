import React from "react";
import { Link } from "react-router-dom"; 
import "./MovieCard.css";
import { GrStarOutline } from "react-icons/gr";

const MovieCard = ({ movie, columns }) => {
  
  const posterSrc = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "path_to_default_image.jpg"; 

 
  const truncatedOverview =
    movie.overview && movie.overview.length > 220
      ? movie.overview.slice(0, 220) + "..."
      : movie.overview || "No description available";

  return (
    <div className={`col-${columns} mt-3 col-sm-12 col-md-${columns}`}>
      <Link to={`/movie/${movie.id}`}>
        <div className="movie-poster">
          <img className="img-fluid" src={posterSrc} alt={movie.title} />

          <div className="movie-info">
            <h2 className="movie-title">{movie.title}</h2>
            <p className="movie-overview">{truncatedOverview}</p>
            <div className="d-flex align-items-center justify-content-center">
              <GrStarOutline /> <span> {Math.round(movie.vote_average)} </span>
            </div>
            <p>{movie.release_date}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
