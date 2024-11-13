import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import movies from "./Movies.json";
import MovieCard from "./compenents/MovieCard";

function App() {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          {movies.map((movie) => (
            <MovieCard key={movie.name} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
