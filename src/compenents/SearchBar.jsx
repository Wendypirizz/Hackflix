import { useState } from "react";

const SearchBar = ({ setSearchParam, setRatingParam, setGenreParam }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setGenreParam("");
    setRatingParam("");

    console.log(search);

    if (search.trim() === "") {
      setSearchParam("");
    } else {
      setSearchParam(`&query=${encodeURIComponent(search.trim())}`); // Actualiza el parámetro de búsqueda
    }
  };

  return (
    <form className="d-flex" role="search" onSubmit={handleSearch}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search a movie"
        aria-label="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
