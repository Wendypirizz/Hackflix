import React from "react";
import "./MovieCard.css";
import { GrStarOutline } from "react-icons/gr";
const MovieCard = ({ movie, columns }) => {
  // Fallback para la imagen de poster
  const posterSrc = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "path_to_default_image.jpg"; // Asegúrate de usar una imagen predeterminada válida.

  // Truncar la descripción del texto si es demasiado largo
  const truncatedOverview =
    movie.overview && movie.overview.length > 100
      ? movie.overview.slice(0, 100) + "..."
      : movie.overview || "No description available";

  return (
    <div className={`col-${columns} mt-3 col-sm-12 col-md-${columns}`}>
      <div className="movie-poster">
        <img className="img-fluid" src={posterSrc} alt={movie.title} />
        <div className="movie-info">
          <h3 className="movie-title">{movie.title}</h3>
          <p className="movie-overview">{truncatedOverview}</p>
          <div className="d-flex align-items-center justify-content-center">
            <GrStarOutline /> <span> {Math.round(movie.vote_average)} </span>
          </div>
          <p>{movie.release_date}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
