import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Main from "./Main";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import LiveTvRoundedIcon from "@mui/icons-material/LiveTvRounded";
import UpcomingRoundedIcon from "@mui/icons-material/UpcomingRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import "./Sidebar.css";
import { Padding } from "@mui/icons-material";

const tvLogo = require("../../Assets/tv.png");

const Sidebar = ({
  movieTitle,
  movieReleaseDate,
  movieRuntime,
  movieOverview,
  moviePoster,
}) => {
  const icons = {
    Home: <HomeRoundedIcon />,
    Movies: <VideocamRoundedIcon />,
    "TV Series": <LiveTvRoundedIcon />,
    Upcoming: <UpcomingRoundedIcon />,
  };
  //   const drawerWidth = 240;
  const [drawerWidth, setDrawerWidth] = React.useState(240);

  React.useEffect(() => {
    // Define breakpoints for media queries
    const mediumScreen = window.matchMedia("(min-width: 768px)");
    const largeScreen = window.matchMedia("(min-width: 1024px)");

    // Update the drawerWidth based on screen size
    if (largeScreen.matches) {
      setDrawerWidth(240);
    } else if (mediumScreen.matches) {
      setDrawerWidth(180);
    } else {
      setDrawerWidth(80); // Default width for small screens
    }

    // Add a listener for screen size changes
    const handleResize = () => {
      if (largeScreen.matches) {
        setDrawerWidth(240);
      } else if (mediumScreen.matches) {
        setDrawerWidth(180);
      } else {
        setDrawerWidth(80);
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(drawerWidth);

  const drawer = (
    <div>
      <Toolbar sx={{ padding: { xs: "5px", md: "50px" } }}>
        <Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={tvLogo} width={"50px"} height={"50px"} />
            <Typography
              sx={{
                fontWeight: 700,
                ml: "24px",
                textTransform: "none",
                display: { xs: "none", sm: "inline-block" },
                color: "#333",
              }}
            >
              MovieBox
            </Typography>
          </Box>
        </Button>
      </Toolbar>

      <Divider />
      <List>
        {["Home", "Movies", "TV Series", "Upcoming"].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            sx={{
              backgroundColor: `${
                text === "Movies" ? "rgba(190, 18, 60, 0.10)" : "transparent"
              }`,
            }}
          >
            <ListItemButton sx={{ px: "24px", my: "8px" }}>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <HomeRoundedIcon /> : <MailIcon />} */}
                {icons[text]}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{
                  color: "#666",
                  fontWeight: 600,
                  fontSize: "20px",
                  display: { xs: "none", sm: "inline-block" },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List sx={{ mt: "2rem" }}>
        <ListItem
          disablePadding
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "150px",
            height: "190px",
            padding: "8px",
            py: "10px",
            justifyContent: "center",
            mx: "auto",
            borderRadius: "20px",
            border: "1px solid rgba(190,18,60, 0.7)",
            background: "rgba(248, 231, 235, 0.4)",
          }}
        >
          <ListItemText
            primary={
              "Play movie quizes and earn free tickets. 50k people are playing now"
            }
            sx={{ display: { xs: "none", sm: "inline-block" } }}
          />
          <ListItemButton
            sx={{
              borderRadius: "30px",
              fontSize: "10px",
              background: "rgba(190,18, 60, 0.20)",
              color: "#be123c",
            }}
          >
            Start Playing
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ px: "12px", mt: "1rem" }}>
          <ListItemButton>
            <ListItemIcon>
              <LogoutRoundedIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Log out"}
              sx={{ display: { xs: "none", sm: "inline-block" } }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth + 20}px` },
          mt: "30px",
        }}
      >
        <Main
          movieTitle={movieTitle}
          movieReleaseDate={movieReleaseDate}
          movieRuntime={movieRuntime}
          movieOverview={movieOverview}
          moviePoster={moviePoster}
        />
      </Box>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="permanent"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
            borderTopRightRadius: "50px",
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderTopRightRadius: "50px",
              borderBottomRightRadius: "50px",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Sidebar;
