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
  const [ratingParam, setRatingParam] = useState("");
  const [columns, setColumns] = useState(3);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      let url =
        "https://api.themoviedb.org/3/discover/movie?api_key=283c1e7a51383f13a7c29b61a9d041f4&include_adult=false&sort_by=popularity.desc&vote_count.gte=40&page=" +
        page;

      if (ratingParam !== null) {
        url += ratingParam;
      }

      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovieList((prevMovies) => [...prevMovies, ...data.results]); // Agrega las nuevas películas al estado
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [ratingParam, page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 100 &&
        !loading
      ) {
        setPage((prevPage) => prevPage + 1); // Incrementa la página cuando se alcanza el final
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Limpia el event listener
  }, [loading]);

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
      <div className="fixed-top container">
        <NavBar />
      </div>
      <Slider movies={topFiveMovies} />
      <div className="d-flex container flex-row justify-content-between">
        <div>
          <RatingStars setRatingParam={setRatingParam} />
        </div>

        <div className="text-center w-25 align-center">
          <GridSelector setColumns={setColumns} />
        </div>
      </div>

      <div className="container text-center bg-transparent">
        <div className="row bg-transparent">
          {movieList.map((movie) => (
            <MovieCard key={movie.id} movie={movie} columns={columns} />
          ))}
          {loading && <div>Loading...</div>}
        </div>
      </div>
    </>
  );
}

export default App;
