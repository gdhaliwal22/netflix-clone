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
    }
    fetchData();
  }, []);
  return (
    <header>
      {/* Background image */}
      {/* {title} */}
      {/* {div > 2 buttons} */}
      {/* {description} */}
    </header>
  );
}

export default Banner;