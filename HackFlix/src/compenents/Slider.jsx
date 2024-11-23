import React from "react";
import "./Slider.css";

const Slider = ({ movies }) => {
  return (
    <div className="slider-container mt-5 mb-2">
      <h1 className="title">Choose between +1000 Movies!</h1>
      <div className="slide">
        {movies.map((movie, index) => (
          <img
            key={index}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
