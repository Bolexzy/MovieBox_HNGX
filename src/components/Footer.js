import React from "react";
import { Box, Button, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

import "./Footer.css";

const Footer = () => {
  return (
    <Box
      className="footer"
      sx={{
        display: "flex",
        flexDirection: "column ",
        alignItems: "center",
        justifyContent: "center",
        gap: "36px",
        mt: "7rem",
        mb: "2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "15px",
          maxWidth: "240px",
        }}
      >
        <Button>
          <FacebookIcon sx={{ color: "#333" }} />
        </Button>
        <Button>
          <InstagramIcon sx={{ color: "#333" }} />
        </Button>
        <Button>
          <TwitterIcon sx={{ color: "#333" }} />
        </Button>
        <Button>
          <YouTubeIcon sx={{ color: "#333" }} />
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "15px",
        }}
      >
        <Typography>Conditions of Use</Typography>
        <Typography>Privacy & Policy</Typography>
        <Typography>Press Room</Typography>
      </Box>
      <Box>
        <Typography>© 2023 MovieBox by Boluwatife Emmanuel</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
