import React, { useState, useEffect } from "react";
import { MoviesContainer } from "./styled/movies.styled";
import Movie from "./Movie";
import { useParams } from "react-router-dom";
import NoMoviesFound from "../components/NoMoviesFound";
import Loader from "../components/Loader";
import axios from "axios";

const Movies = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [movies, setMovies] = useState([]);
  let { keyword } = useParams();

  const fetchData = async () => {
    setIsFetching(true);
    const res = await axios.get(
      `https://www.omdbapi.com/?s=${keyword}&type=movie&apikey=8f49081b`
    );
    if (res.data.Search) {
      setMovies(res.data.Search);
    } else {
      setMovies([]);
    }
    setIsFetching(false);
  };

  useEffect(() => {
    if (keyword) {
      fetchData();
    }
  }, [keyword]);

  return isFetching ? (
    <Loader />
  ) : (
    <MoviesContainer>
      {movies.length > 0 ? (
        movies.map((movie) => <Movie key={movie.imdbID} movie={movie} />)
      ) : (
        <NoMoviesFound />
      )}
    </MoviesContainer>
  );
};

export default Movies;
