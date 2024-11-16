// src/App.jsx
import React, { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./compenents/MovieCard";
import GridSelector from "./compenents/GridSelector";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [columns, setColumns] = useState(3);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=283c1e7a51383f13a7c29b61a9d041f4&include_adult=false&page=1&sort_by=popularity.desc&vote_count.gte=40"
    )
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data.results);
      });
  }, []);

  return (
    <>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

      <GridSelector setColumns={setColumns} />
      <div className="container text-center">
        <div className="row">
          {movieList.map((movie) => (
            <MovieCard key={movie.id} movie={movie} columns={columns} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
