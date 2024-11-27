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
    <div className="container-fluid py-5" style={{ 
      background: "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(34, 34, 34, 0.7))", 
      borderRadius: "15px",
      color: "#fff" 
    }}>
  <div className="row align-items-center">
    
    <div className="col-md-3 d-flex justify-content-center">
      <img 
        src={posterSrc} 
        alt={movie.title} 
        className="img-fluid rounded shadow" 
        style={{ maxWidth: "100%", height: "auto", maxHeight: "300px" }} 
      />
    </div>
    
    <div className="col-md-9">
      <div className="text-center mb-4">
        <h1 className="fw-bold">{movie.title}</h1>
      </div>
      <p><strong>Descripción:</strong> {movie.overview || "No description available"}</p>
      <p><strong>Fecha de estreno:</strong> {movie.release_date}</p>
      <p><strong>Calificación:</strong> {movie.vote_average}</p>
    </div>
  </div>
</div>

  );
}

export default MovieDetail;
