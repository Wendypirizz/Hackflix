// src/App.jsx
import React, { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./compenents/MovieCard";
import GridSelector from "./compenents/GridSelector";
import RatingStars from "./compenents/RatingStars";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [ratingParam, setRatingParam] = useState("");
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
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
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <GridSelector setColumns={setColumns} />
      <div>
        <RatingStars setRatingParam={setRatingParam} />
      </div>

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
