import React from "react";

function Movie({item: {title, backdrop_path }}) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="" />
    </div>
  );
}

export default Movie;
