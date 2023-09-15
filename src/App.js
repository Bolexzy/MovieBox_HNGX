import "./App.css";
import React from "react";
import Header from "./components/Header";
import Movies from "./components/Movies";
import { LinearProgress, Stack } from "@mui/material";
import Footer from "./components/Footer";

function App() {
  const SEARCH_API = "https://api.themoviedb.org/3/search/movie?query=";
  const FEATURED_API =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTE0NGM1MjQ1NTE2NzIxNzJlODhkOTFjMDNlNjFiZiIsInN1YiI6IjY1MDFjMGJmZWZlYTdhMDBlMDM1ZTg2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.USge4rEggfsg31M954k15cbtVvmoyxEKXH-2AQAOT9A",
    },
  };

  const getMovies = (API) => {
    setIsLoading(true);
    fetch(API, options)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results.slice(0, 10));
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("error:" + err);
        setIsLoading(false);
      });
  };

  React.useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  console.log(movies);

  const [searchQuery, setSearchQuery] = React.useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchQuery) {
      getMovies(SEARCH_API + searchQuery);
    }

    setSearchQuery("");
  };

  const handleOnChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="App">
      <Header
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        searchQuery={searchQuery}
      />

      {isLoading ? (
        <Stack
          sx={{ my: "2rem", mx: "4rem", width: "80%", color: "grey.500" }}
          spacing={2}
        >
          <LinearProgress color="inherit" />
          <LinearProgress color="inherit" />
        </Stack>
      ) : (
        <Movies movies={movies} />
      )}

      <Footer />
    </div>
  );
}

export default App;
