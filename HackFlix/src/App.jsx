import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importa Router y Routes
import "./App.css";
import MovieCard from "./compenents/MovieCard";
import GridSelector from "./compenents/GridSelector";
import RatingStars from "./compenents/RatingStars";
import NavBar from "./compenents/NavBar";
import Slider from "./compenents/Slider";
import BeatLoader from "react-spinners/BeatLoader";
import InfiniteScroll from "react-infinite-scroll-component";
import MovieDetail from "./Pages/MovieDetail/"; // Importa el componente de detalle de la película

function App() {
  const [movieList, setMovieList] = useState([]);
  const [ratingParam, setRatingParam] = useState("");
  const [columns, setColumns] = useState(3);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

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
    const nextPage = page + 1;
    setPage(nextPage);
    fetchMovies(nextPage);
  };

  return (
    <Router>
      {" "}
      {/* Añadimos el Router */}
      <div className="fixed-top container pt-5">
        <NavBar />
      </div>
      <Slider movies={movieList} />
      <div className="d-flex container flex-row align-items-center justify-content-between">
        <div>
          <RatingStars setRatingParam={setRatingParam} />
        </div>
        <div>
          <GridSelector setColumns={setColumns} />
        </div>
      </div>
      <InfiniteScroll
        dataLength={movieList.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <div className="spinner mt-4">
            <BeatLoader color={"#9d9d9d"} setLoading={loading} />
          </div>
        }
        endMessage={
          <p className="text-center mt-4">No hay más películas para mostrar.</p>
        }
      >
        <div className="container text-center bg-transparent">
          <div className="row bg-transparent">
            {movieList.map((movie) => (
              <MovieCard key={movie.id} movie={movie} columns={columns} />
            ))}
          </div>
        </div>
      </InfiniteScroll>
      {/* Rutas para mostrar el detalle de la película */}
      <Routes>
        <Route
          path="/movie/:id"
          element={<MovieDetail movieList={movieList} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
