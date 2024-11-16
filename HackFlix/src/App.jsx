import React, { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./compenents/MovieCard";
import RatingStars from "./compenents/RatingStars"; // Asegúrate de que la ruta sea correcta

function App() {
  const [movieList, setMovieList] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [ratingParam, setRatingParam] = useState(""); // Rating seleccionado (1-5)
  // Estado para el modo oscuro

  // Cambiar el modo cuando el estado cambia
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode"); // Añadir clase dark-mode al body
    } else {
      document.body.classList.remove("dark-mode"); // Eliminar clase dark-mode
    }
  }, [isDarkMode]);

  useEffect(() => {
    const fetchMovies = async () => {
      let url =
        "https://api.themoviedb.org/3/discover/movie?api_key=283c1e7a51383f13a7c29b61a9d041f4&include_adult=false&page=1&sort_by=popularity.desc&vote_count.gte=40"; // URL por defecto para todas las películas

      if (ratingParam !== null) {
        url = `https://api.themoviedb.org/3/discover/movie?api_key=283c1e7a51383f13a7c29b61a9d041f4&include_adult=false&page=1&sort_by=popularity.desc&vote_count.gte=40${ratingParam}`;
      }

      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovieList(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [ratingParam]);

  return (
    <>
      <div className={`container text-center ${isDarkMode ? "dark-mode" : ""}`}>
        {/* Botón para alternar entre modo oscuro y claro */}
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>

        <div>
          <RatingStars setRatingParam={setRatingParam} />
        </div>

        <div className="row">
          {movieList.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
