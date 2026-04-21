const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const API_KEY = process.env.TMDB_API_KEY;

// buscar filmes
app.get("/search", async (req, res) => {
  const { query, language } = req.query;

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=${language}`;

  const response = await fetch(url);
  const data = await response.json();

  res.json(data);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});