import React from "react";
import "./Navbar.css";
import Box from "@mui/material/Box";
import { Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { Rowing } from "@mui/icons-material";

const tv = require("../../Assets/tv.png");
const searchIcon = require("../../Assets/Search.png");

export const Navbar = ({ handleOnChange, handleOnSubmit, searchQuery }) => {
  return (
    <Box className="Navbar-box" sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          height: 80,
          backgroundColor: "transparent",
          flexDirection: "row",
        }}
      >
        {/* logo */}
        {/* <img className="navbar" alt="Navbar" src="navbar.png" /> */}
        <Toolbar sx={{ width: 1 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: 50,
              my: "auto",
              gap: "24px",
              //   ml: {
              //     xs: "10px",
              //     sm: "30px",
              //     md: "95px",
              //   },
            }}
            className="logo"
          >
            <img className="tv" alt="Tv" src={tv} />
            <Typography
              className="logo-text"
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                  md: "block",
                },
                fontSize: {
                  xs: "15px",
                  md: "24px",
                },
              }}
            >
              MovieBox
            </Typography>
          </Box>

          {/* search bar */}
          <Box
            className="search-bar"
            sx={{
              my: "auto",
              width: {
                sm: 325,
                md: 525,
              },
              mx: "auto",
              display: {
                xs: "flex",
                sm: "flex",
              },
            }}
          >
            <form onSubmit={handleOnSubmit}>
              <input
                type="search"
                required=""
                placeholder="What do you want to watch?"
                id="search"
                style={{ width: "100%", height: "100%" }}
                value={searchQuery}
                onChange={handleOnChange}
              />
              {/* <Button class="search-btn">
                <img src={searchIcon} alt="search icon" width={"16px"} />
              </Button> */}
              {/* <button class="close-btn" type="reset"></button> */}
            </form>
          </Box>

          {/* sign in */}
          <Box sx={{ mx: "auto" }}>
            {/* <Box
              sx={{
                display: {
                  xs: "inline-block",
                  sm: "none",
                  md: "none",
                  lg: "none",
                  xl: "none",
                },
              }}
            >
              <img
                src={searchIcon}
                alt="search icon"
                class="search"
                style={({ width: "15px" }, { height: "15px" })}
              />
            </Box> */}

            <Button
              color="inherit"
              sx={{
                fontWeight: 700,
                lineHeight: "24px",
                fontSize: {
                  xs: "12px",
                  md: "16px",
                },
                display: {
                  xs: "none",
                  sm: "inline-block",
                },
              }}
            >
              Sign in
            </Button>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                ml: 1,
                bgcolor: "red",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
