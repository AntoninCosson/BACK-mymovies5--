require("dotenv").config();

var express = require("express");
const fetch = require("node-fetch");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: "https://front-mymovies5.vercel.app",
  })
);

app.use("/movies, moviesRouter");
app.use("/", moviesRoutes);

module.exports = router;
