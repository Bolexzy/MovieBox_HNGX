import React from "react";
import "./Description.css";
import { Box } from "@mui/material";
import { Toolbar, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";

// logos/icons
const play = require("../../Assets/Play.png");
const imdb = require("../../Assets/imdb.png");
const tomato = require("../../Assets/tomato.png");
const poster = require("../../Assets/Poster.png");

const Description = () => {
  return (
    <Box className="description-box" sx={{ backgroundColor: "transparent" }}>
      <Toolbar
        sx={{
          flexDirection: {
            xs: "column",
            sm: "row",
          },

          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            my: "110px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "16px",
            maxWidth: "400px",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: "38px",
                md: "48px",
              },
              fontWeight: 700,
              lineHeight: "56px",
            }}
          >
            John Wick 3: Parabellum
          </Typography>

          {/* rating */}
          <Box maxWidth={"184px"} className="rating">
            <img src={imdb} width={"35px"} height={"17px"} />
            <Typography
              className="rating-text"
              sx={{
                mr: "auto",
                fontSize: {
                  xs: "10px",
                  md: "12px",
                },
              }}
            >
              86.0/100
            </Typography>
            <img src={tomato} width={"16px"} height={"16px"} />
            <Typography
              className="rating-text"
              sx={{
                ml: "auto",
                fontSize: {
                  xs: "10px",
                  md: "12px",
                },
              }}
            >
              97%
            </Typography>
          </Box>

          <Typography
            variant="p"
            className="description"
            sx={{
              fontSize: {
                xs: "10px",
                md: "14px",
              },
              fontWeight: 500,
              lineHeight: "18px",
            }}
          >
            John Wick is on the run after killing a member of the international
            assassins' guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
          </Typography>

          <Button
            className="watch-trailer"
            sx={{
              fontSize: {
                xs: "11px",
                md: "14px",
              },
            }}
          >
            <img src={play} width={"20px"} height={"20px"} />
            WATCH TRAILER
          </Button>
        </Box>

        <Pagination
          count={10}
          sx={{ color: "#333", backgroundColor: "#e8e8e8" }}
        />
      </Toolbar>
    </Box>
  );
};

export default Description;
