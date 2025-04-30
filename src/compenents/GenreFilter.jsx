import React, { useState, useEffect } from "react";

const GenreFilter = ({ setGenreParam }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=283c1e7a51383f13a7c29b61a9d041f4"
    )
      .then((response) => response.json())
      .then((data) => setGenres(data.genres))
      .catch((error) => console.error("Error al cargar géneros:", error));
  }, []);

  const handleChange = (event) => {
    const genreId = event.target.value;
    setGenreParam(genreId ? `&with_genres=${genreId}` : "");
  };

  return (
    <select
      onChange={handleChange}
      className="genre-select bg-secondary p-1 rounded"
    >
      <option value="">Todos los géneros</option>
      {genres.map((genre) => (
        <option key={genre.id} value={genre.id}>
          {genre.name}
        </option>
      ))}
    </select>
  );
};

export default GenreFilter;
