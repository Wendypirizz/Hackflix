import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import movies from "./Movies.json";
import MovieCard from "./compenents/MovieCard";
import { useState, useEffect } from "react";

function App() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=283c1e7a51383f13a7c29b61a9d041f4&include_adult=false&page=1&sort_by=popularity.desc&vote_count.gte=40"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.results);
        setMovieList(data.results);
      });
  }, []);

  return (
    <>
      <div className="container text-center">
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
