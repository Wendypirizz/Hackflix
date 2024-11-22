import React from "react";

const GridSelector = ({ setColumns }) => {
  const handleSelect = (columns) => {
    setColumns(columns);
  };

  return (
    <div class="btn-group" role="group" aria-label="Basic example">
      <button
        type="button"
        class="btn btn-secondary"
        onClick={() => handleSelect(4)}
      >
        3
      </button>
      <button
        type="button"
        class="btn btn-secondary"
        onClick={() => handleSelect(3)}
      >
        4
      </button>
      <button
        type="button"
        class="btn btn-secondary"
        onClick={() => handleSelect(2)}
      >
        6
      </button>
    </div>
  );
};

export default GridSelector;
