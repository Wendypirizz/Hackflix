import React from "react";

const AlphabeticOrderer = ({ setReviews }) => {
  const handleSort = (order) => {
    setReviews((prevReviews) => {
      const sortedReviews = [...prevReviews];
      sortedReviews.sort((a, b) => {
        if (order === "asc") {
          return a.tema.localeCompare(b.tema);
        } else {
          return b.tema.localeCompare(a.tema);
        }
      });
      return sortedReviews;
    });
  };

  return (
    <div className="mb-3">
      <button
        className="btn btn-outline-success me-2"
        onClick={() => handleSort("asc")}
      >
        Ordenar A-Z
      </button>
      <button
        className="btn btn-outline-success"
        onClick={() => handleSort("desc")}
      >
        Ordenar Z-A
      </button>
    </div>
  );
};

export default AlphabeticOrderer;
