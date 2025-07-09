require("dotenv").config();

var express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
// const PORT = 3001;

const corsOptions = {
  origin: "https://front-mymovies5.vercel.app",
};

app.use(cors(corsOptions));

var router = express.Router();

const TMDB_API_KEY = process.env.TMDB_API_KEY;

router.get("/movies", (req, res) => {
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}`)
    .then((response) => response.json())
    .then((data) => res.json({ movies: data.results }));
});

app.use("/", router);

module.exports = router;
