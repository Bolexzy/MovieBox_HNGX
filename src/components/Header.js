import "./Header.css";
import { Navbar } from "./header_components/Navbar";
import Description from "./header_components/Description";
import React from "react";
import { Box } from "@mui/material";

const Header = ({ handleOnChange, handleOnSubmit, searchQuery }) => {
  return (
    <Box
      className="header"
      sx={{
        px: {
          xs: "12px",
          sm: "24px",
          md: "71px",
        },
      }}
    >
      <Navbar
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        searchQuery={searchQuery}
      />
      <Description />
    </Box>
  );
};

export default Header;
