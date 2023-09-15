import React from "react";
import { Typography } from "@mui/material";
import MovieCard from "./MovieCard";
import "./Movies.css";
import Box from "@mui/material/Box";
import { Paper, Grid } from "@mui/material";

// const fetch = require("node-fetch");

// https://apithemoviedb.com.org/3/mobies/238

// const handleClick = () => {
//   const url = "https://api.themoviedb.com.org/3/movies/238";
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTE0NGM1MjQ1NTE2NzIxNzJlODhkOTFjMDNlNjFiZiIsInN1YiI6IjY1MDFjMGJmZWZlYTdhMDBlMDM1ZTg2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.USge4rEggfsg31M954k15cbtVvmoyxEKXH-2AQAOT9A",
//     },
//   };

//   fetch(url, options)
//     .then((res) => res.json())
//     .then((json) => console.log(json))
//     .catch((err) => console.error("error:" + err));
// };

const Movies = ({ movies }) => {
  //   const API_KEY = "e5144c524551672172e88d91c03e61bf";

  const Cards = movies.map((movie) => {
    // const utcString = movie.release_date;
    // const date = new Date(utcString);
    // const options = {
    //   weekday: "short",
    //   month: "long",
    //   day: "numeric",
    //   year: "numeric",
    // };
    // const formattedDate = date.toLocaleDateString("en-US", options);

    return (
      <MovieCard
        moviePoster={movie.poster_path}
        movieTitle={movie.original_title}
        movieReleaseDate={movie.release_date}
        voteAverage={movie.vote_average}
        overview={movie.overview}
        movieId={movie.id}
      />
    );
  });

  return (
    <Box
      className="featured-movies"
      sx={{
        px: {
          xs: "18px",
          sm: "30px",
          md: "98px",
        },
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: {
            xs: "30px",
            md: "36px",
          },
          mb: "44px",
        }}
      >
        Featured
      </Typography>
      <Grid container spacing={5} sx={{ mx: "auto" }}>
        {Cards}
      </Grid>
    </Box>
  );
};

export default Movies;
