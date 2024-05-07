import React from "react";
import "./SearchBarReasult.css";

const SearchBarReasult = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return (
          <div
            key={id}
            className="serach-result"
            onClick={(e) => alert(`you clicked on ${result.name}`)}
          >
            {result.name}
          </div>
        );
      })}
    </div>
  );
};

export default SearchBarReasult;
