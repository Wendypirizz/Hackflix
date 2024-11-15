import React, { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./compenents/MovieCard"; // Asegúrate de que la ruta sea correcta

function App() {
  const [movieList, setMovieList] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false); // Estado para el modo oscuro

  // Cambiar el modo cuando el estado cambia
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode"); // Añadir clase dark-mode al body
    } else {
      document.body.classList.remove("dark-mode"); // Eliminar clase dark-mode
    }
  }, [isDarkMode]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=283c1e7a51383f13a7c29b61a9d041f4&include_adult=false&page=1&sort_by=popularity.desc&vote_count.gte=40"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovieList(data.results);
      });
  }, []);

  return (
    <>
      <div className={`container text-center ${isDarkMode ? "dark-mode" : ""}`}>
        {/* Botón para alternar entre modo oscuro y claro */}
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>

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
