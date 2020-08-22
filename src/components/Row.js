import React, { useState, useEffect } from "react";
import axios from "../axios";
import "../Row.css";

const base_url = "http://image.tmdb.org/t/p/origial";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // if [], run once when row loads, and don't run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie, index) => (
          <img
            className="row__poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
