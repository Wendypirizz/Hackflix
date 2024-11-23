import React from "react";
import { useParams } from "react-router-dom"; 

function MovieDetail({ movieList }) {
  const { id } = useParams(); 
  const movie = movieList.find((movie) => movie.id === parseInt(id)); 

  if (!movie) {
    return <div>Pelicula no encontrada.</div>;
  }

  const posterSrc = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "path_to_default_image.jpg";

  return (
    <div className="movie-detail-container">
      <h1>{movie.title}</h1>
      <img src={posterSrc} alt={movie.title} className="movie-detail-poster" />
      <p>
        <strong>Descripción:</strong>{" "}
        {movie.overview || "No description available"}
      </p>
      <p>
        <strong>Fecha de estreno:</strong> {movie.release_date}
      </p>
      <p>
        <strong>Calificación:</strong> {movie.vote_average}
      </p>
    </div>
  );
}

export default MovieDetail;
