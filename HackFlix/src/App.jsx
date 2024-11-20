// src/App.jsx
import React, { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./compenents/MovieCard";
import GridSelector from "./compenents/GridSelector";
import RatingStars from "./compenents/RatingStars";
import NavBar from "./compenents/NavBar";
import Slider from "./compenents/Slider";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [ratingParam, setRatingParam] = useState("");
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    if (!isDarkMode) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const fetchMovies = async () => {
      let url =
        "https://api.themoviedb.org/3/discover/movie?api_key=283c1e7a51383f13a7c29b61a9d041f4&include_adult=false&page=1&sort_by=popularity.desc&vote_count.gte=40";

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

  let highRatedMovies = [];
  for (const movie of movieList) {
    if (movie.vote_average > 6) {
      highRatedMovies.push(movie);
    }
  }

  const topFiveMovies = []; // Arreglo para las primeras 5 películas

  for (let i = 0; i < highRatedMovies.length && i < 5; i++) {
    topFiveMovies.push(highRatedMovies[i]);
  }
  console.log(topFiveMovies);

  return (
    <>
      <NavBar />

      <Slider movies={topFiveMovies} />

      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <div className="d-flex justify-content-center">
        <div className="text-center w-25 align-center">
          <GridSelector setColumns={setColumns} />
        </div>
      </div>

      <div>
        <RatingStars setRatingParam={setRatingParam} />
      </div>

      <div className="container text-center bg-transparent">
        <div className="row bg-transparent">
          {movieList.map((movie) => (
            <MovieCard key={movie.id} movie={movie} columns={columns} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
