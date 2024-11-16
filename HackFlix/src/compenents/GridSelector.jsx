import React from "react";

const GridSelector = ({ setColumns }) => {
  const handleSelect = (columns) => {
    setColumns(columns);
  };

  return (
    <div className="mb-3">
      <button
        className="btn btn-outline-primary"
        onClick={() => handleSelect(6)}
      >
        2 Películas por fila
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => handleSelect(4)}
      >
        3 Películas por fila
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => handleSelect(3)}
      >
        4 Películas por fila
      </button>
    </div>
  );
};

export default GridSelector;
