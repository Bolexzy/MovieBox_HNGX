import React from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Sidebar from "./Sidebar";
import { LinearProgress } from "@mui/material";
import { Stack } from "@mui/material";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = React.useState(null);

  const API_URL = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTE0NGM1MjQ1NTE2NzIxNzJlODhkOTFjMDNlNjFiZiIsInN1YiI6IjY1MDFjMGJmZWZlYTdhMDBlMDM1ZTg2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.USge4rEggfsg31M954k15cbtVvmoyxEKXH-2AQAOT9A",
    },
  };

  const getMovie = (API_URL) => {
    fetch(API_URL, options)
      .then((res) => res.json())
      .then((json) => setMovie(json))
      .catch((err) => console.error("error:" + err));
  };

  React.useEffect(() => {
    getMovie(API_URL);
  }, [id]);

  if (!movie) {
    return (
      <Box
        sx={{
          width: 1,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack sx={{ mx: "4rem", width: "80%", color: "grey.500" }} spacing={2}>
          <LinearProgress color="inherit" />
          <LinearProgress color="inherit" />
        </Stack>
      </Box>
    );
  }
  console.log(movie);

  return (
    <Box>
      <Sidebar
        movieTitle={movie.original_title}
        movieReleaseDate={movie.release_date}
        movieRuntime={movie.runtime}
        movieOverview={movie.overview}
        moviePoster={movie.poster_path}
      />
      movies
    </Box>
  );
};

export default MovieDetails;
