import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./compenents/NavBar";
import Home from "./Pages/Home";
import MovieDetail from "./Pages/MovieDetail/";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [ratingParam, setRatingParam] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [columns, setColumns] = useState(3);
  const fetchMovies = async (currentPage) => {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=283c1e7a51383f13a7c29b61a9d041f4&include_adult=false&page=${currentPage}&sort_by=popularity.desc&vote_count.gte=40`;

    if (ratingParam) {
      url += ratingParam;
    }

    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      if (data.results.length === 0) {
        setHasMore(false);
      } else {
        setMovieList((prevMovies) => [...prevMovies, ...data.results]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setMovieList([]);
    setPage(1);
    setHasMore(true);
    fetchMovies(1);
  }, [ratingParam]);

  const fetchMoreData = () => {
    if (hasMore && !loading) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchMovies(nextPage);
    }
  };

  return (
    <Router>
      {" "}
      <div className="fixed-top">
        <NavBar />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              page={page}
              hasMore={hasMore}
              setLoading={setLoading}
              setPage={setPage}
              fetchMoreData={fetchMoreData}
              columns={columns}
              setHasMore={setHasMore}
              setColumns={setColumns}
              setRatingParam={setRatingParam}
              movieList={movieList}
              loading={loading}
              fetchMovies={fetchMovies}
            />
          }
        />
        <Route
          path="/movie/:id"
          element={<MovieDetail movieList={movieList} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
