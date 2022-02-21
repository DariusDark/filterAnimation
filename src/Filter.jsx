import { useEffect, useState } from "react";

function Filter({ movies, setFiltered, activeGenre, setActiveGenre }) {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(movies);
    } else {
      const filtered = movies.filter((item) =>
        item.genre_ids.includes(activeGenre)
      );
      setFiltered(filtered);
    }
  }, [activeGenre]);
  return (
    <div className="filter-container">
      <button
        className={`btn ${activeGenre === 0 ? "active" : ""}`}
        onClick={() => setActiveGenre(0)}
      >
        All
      </button>
      <button
        className={`btn ${activeGenre === 35 ? "active" : ""}`}
        onClick={() => setActiveGenre(35)}
      >
        Comedy
      </button>
      <button
        className={`btn ${activeGenre === 28 ? "active" : ""}`}
        onClick={() => setActiveGenre(28)}
      >
        Action
      </button>
    </div>
  );
}

export default Filter;
