import React from "react";
import "./Slider.css";

const Slider = ({ movies }) => {
  console.log(movies);

  return (
    <div className="slider-container container mb-2">
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
