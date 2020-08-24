import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../request";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  //   console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner__contents">
        {""}
        {/* Background image */}
        {/* {title} */}
        <h1></h1>
        {/* {div > 2 buttons} */}
        {/* {description} */}
      </div>
    </header>
  );
}

export default Banner;
