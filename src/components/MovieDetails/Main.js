import React from "react";
import { Box, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import Link from "@mui/material/Link";
import { Button, Select, MenuItem } from "@mui/material";
import "./Main.css";

const bestmovies = require("../../Assets/bestmovies.png");

const Main = ({
  movieTitle,
  movieReleaseDate,
  movieRuntime,
  movieOverview,
  moviePoster,
}) => {
  return (
    // &autoplay=1
    <Box
      sx={{
        px: "12px",
        mr: "2rem",
        height: "auto",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        data-testid="movie-poster"
        sx={{
          backgroundImage: `url(http://image.tmdb.org/t/p/original/${moviePoster})`,
          maxWidth: "95%",
          height: "400px",
          borderRadius: "20px",
          objectFit: "cover",
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      ></Box>

      <Box
        sx={{
          mt: "2rem",
          textAlign: "center",
          fontSize: "23px",
          maxWidth: "95%",
        }}
        className="movie-info"
      >
        <Typography
          sx={{
            color: "#404040",
            fontFamily: "Poppins",
            fontWeight: 500,
            float: "left",
          }}
          data-testid="movie-title"
        >
          {movieTitle ? movieTitle : "error"}
        </Typography>
        <Typography sx={{ float: "left", textAlign: "center", my: "auto" }}>
          <ul style={{ marginTop: "auto" }}>
            <li data-testid="movie-release-date">
              {movieReleaseDate ? movieReleaseDate : "error"}
            </li>
            <li>PG-13</li>
            <li data-testid="movie-runtime">
              {movieRuntime ? movieRuntime : "error"}m
            </li>
          </ul>
        </Typography>
        <Typography
          sx={{
            mx: "1rem",
            my: "auto",
            float: "left",
            textAlign: "center",
            display: "flex",
            mx: "15px",
          }}
        >
          <span
            style={{
              marginLeft: "10px",
              marginRight: "30px",
              color: "#b91c1c",
            }}
          >
            Action
          </span>
          <span
            style={{
              marginRight: "30px",
              color: "#b91c1c",
            }}
          >
            Drama
          </span>
        </Typography>

        <Typography
          sx={{
            display: "flex",
            fontSize: "12px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Rating
            name="read-only"
            value={1}
            readOnly
            max={1}
            className="star"
          />
          <span
            style={{
              color: "#e8e8e8",
              borderRight: "1px solid #333",
              padding: "2px",
            }}
          >
            8.5
          </span>
          <span style={{ padding: "8px" }}>350k</span>
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          maxWidth: "95%",
        }}
      >
        <Box>
          <Typography data-testid="movie-overview">
            {movieOverview ? movieOverview : "error"}
          </Typography>

          <Typography sx={{ fontSize: "13px", fontWeight: 400, mt: "1.5rem" }}>
            Director:{" "}
            <Link href="#" color="#be123c">
              {"Joseph kosinski"}
            </Link>
          </Typography>
          <Typography sx={{ fontSize: "13px", fontWeight: 400, mt: "1.5rem" }}>
            Writers:{" "}
            <Link href="#" color="#be123c">
              {"Joseph kosinski"}
            </Link>
          </Typography>
          <Typography sx={{ fontSize: "13px", fontWeight: 400, mt: "1.5rem" }}>
            Stars:{" "}
            <Link href="#" color="#be123c">
              {"Joseph kosinski"}
            </Link>
          </Typography>

          <Box sx={{ mt: "1rem" }}>
            <Button
              sx={{
                width: "250px",
                borderRadius: "10px",
                color: "#fff",
                backgroundColor: "#be123c",
              }}
            >
              Top rated movie #65
            </Button>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={"age"}
              label="Age"
              sx={{
                width: "250px",
                height: "35px",
                borderRadius: "10px",
              }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Box>
        </Box>
        <Box>
          <Button
            sx={{
              width: "250px",
              borderRadius: "10px",
              color: "#fff",
              backgroundColor: "#be123c",
              mt: "1rem",
            }}
          >
            See Showtimes
          </Button>
          <Button
            sx={{
              width: "250px",
              borderRadius: "10px",
              color: "#333",
              backgroundColor: "rgba(190, 18, 60, 0.1)",
              border: "1px solid #be123c",
              my: "1rem",
            }}
          >
            More watch options
          </Button>
          <img src={bestmovies} width={"250px"} />
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
