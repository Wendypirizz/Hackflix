import Slider from "../compenents/Slider";
import BeatLoader from "react-spinners/BeatLoader";
import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from "../compenents/MovieCard";
import GridSelector from "../compenents/GridSelector";
import RatingStars from "../compenents/RatingStars";

const Home = ({
  setColumns,
  columns,
  hasMore,
  movieList,
  loading,
  setRatingParam,
  fetchMoreData,
}) => {
  return (
    <>
      <Slider movies={movieList} />
      <div className="d-flex container flex-row align-items-center justify-content-between mt-5">
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
    </>
  );
};

export default Home;
