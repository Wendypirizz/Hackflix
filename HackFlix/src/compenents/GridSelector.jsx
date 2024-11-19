import React from "react";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";

const GridSelector = ({ setColumns }) => {
  const handleSelect = (columns) => {
    setColumns(columns);
  };

  return (
    <div className="row mb-3 ">
      <div className="col-4">
        <TfiLayoutGrid2Alt onClick={() => handleSelect(2)} />
      </div>
      <div className="col-4">
        <TfiLayoutGrid3Alt onClick={() => handleSelect(4)} />
      </div>
      <div className="col-4">
        <TfiLayoutGrid4Alt onClick={() => handleSelect(3)} />
      </div>
    </div>
  );
};

export default GridSelector;
