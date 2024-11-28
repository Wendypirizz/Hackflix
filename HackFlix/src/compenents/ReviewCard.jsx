import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="row align-items-center p-3 bg-black m-3 rounded ">
      <div className="col-3">
        <img
          className="img-fluid rounded"
          src={`https://image.tmdb.org/t/p/w500${review.poster_path}`}
          alt=""
        />
      </div>
      <div className="col-9 text-start position-relative object-fit-cover">
        <div className="position-absolute top-0 start-0 object-fit-cover">
          <div className="">
            <h2 className="">{review.tema}</h2>
          </div>
          <div>
            <p>{review.contenido}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
