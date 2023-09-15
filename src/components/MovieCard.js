import React from "react";
import "./Movies.css";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Paper, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// pics/logos/icons
const heart = require("../Assets/Heart.png");
const imdb = require("../Assets/imdb.png");
const tomato = require("../Assets/tomato.png");

const MovieCard = (props) => {
  //   console.log(typeof topRated);
  console.log(props);

  return (
    <Grid item xs={12} md={4} justify="center">
      <Link to={`/movies/${props.movieId}`} style={{ textDecoration: "none" }}>
        <Paper elevation={8} className="movie-card" data-testid="movie-card">
          {/* image description */}
          <Box
            className="card-bg"
            data-testid="movie-poster"
            background={`http://image.tmdb.org/t/p/original${props.moviePoster}`}
            sx={{
              backgroundImage: `url(http://image.tmdb.org/t/p/original/${props.moviePoster})`,
            }}
          >
            <Box
              sx={{
                maxWidth: "220px",
                display: "flex",
                gap: "114px",
                alignItems: "center",
                justifyContent: "center",
                color: "#111827",
                mx: "auto",
                py: "16px",
              }}
            >
              <Typography
                sx={{
                  backgroundColor: "#d1d5db",
                  borderRadius: "12px",
                  px: "8px",
                  py: "3px",
                  fontSize: "12px",
                }}
              >
                MOVIES
              </Typography>

              <Rating
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                name="customized-color"
                defaultValue={0}
                max={1}
                sx={{
                  maxWidth: "50px",
                  borderRadius: "40%",
                  backgroundColor: "#d1d5db",
                }}
              />
            </Box>
          </Box>

          {/* details */}
          <Box sx={{ px: "8px" }}>
            <Typography
              sx={{
                color: "#9ca3af",
                fontSize: "12px",
                fontWeight: 700,
                mt: "12px",
              }}
              data-testid="movie-release-date"
            >
              {props.movieReleaseDate}
            </Typography>
            <Typography
              sx={{
                color: "#111827",
                fontSize: "18px",
                fontWeight: 700,
                mt: "12px",
              }}
              data-testid="movie-title"
            >
              {props.movieTitle}
            </Typography>

            <Box maxHeight={"18px"} sx={{ mt: "12px", display: "flex" }}>
              <img src={imdb} />
              <Typography
                sx={{
                  ml: "10px",
                  mr: "30px",
                  fontSize: "12px",
                  fontWeight: 400,
                }}
              >
                {props.voteAverage * 10} / 100
              </Typography>
              <img src={tomato} width={"16px"} height={"16px"} />
              <Typography
                className=""
                sx={{
                  ml: "10px",
                  fontSize: {
                    xs: "10px",
                    md: "12px",
                  },
                }}
              >
                {props.voteAverage * 10}%
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "#9ca3af",
                fontSize: "12px",
                fontWeight: 700,
                mt: "12px",
              }}
            >
              Action, Adventure, Horror
            </Typography>
          </Box>
        </Paper>
      </Link>
    </Grid>
  );
};

export default MovieCard;
