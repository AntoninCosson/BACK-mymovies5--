require("dotenv").config();

var express = require("express");
const fetch = require("node-fetch");
const app = express();
const PORT = 3001;
const cors = require("cors");

app.use(cors());

var router = express.Router();

const TMDB_API_KEY = process.env.TMDB_API_KEY;

router.get("/movies", (req, res) => {
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}`)
    .then((response) => response.json())
    .then((data) => res.json({ movies: data.results }));
});

module.exports = router;
