import React from "react";
import { Link } from "react-router-dom"; // Importa el Link para manejar la navegación
import "./MovieCard.css";
import { GrStarOutline } from "react-icons/gr";

const MovieCard = ({ movie, columns }) => {
  // Obtener la URL del póster
  const posterSrc = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "path_to_default_image.jpg"; // Imagen por defecto si no hay póster disponible

  // Truncar la descripción si es demasiado larga
  const truncatedOverview =
    movie.overview && movie.overview.length > 220
      ? movie.overview.slice(0, 220) + "..."
      : movie.overview || "No description available";

  return (
    <div className={`col-${columns} mt-3 col-sm-12 col-md-${columns}`}>
      <div className="movie-poster">
        {/* Envolvemos la imagen en un Link para redirigir a la página de detalles */}
        <Link to={`/movie/${movie.id}`}>
          <img className="img-fluid" src={posterSrc} alt={movie.title} />
        </Link>
        <div className="movie-info">
          <h2 className="movie-title">{movie.title}</h2>
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
