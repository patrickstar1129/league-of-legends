const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const axios = require("axios");

const API_KEY = require("../src/config.js");

app.use(express.json());

app.get("/api/getSummoner", (req, res) => {
  axios
    .get(
      `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${req.query.name}?api_key=${API_KEY.TOKEN}`
    )
    .then((response) => res.send(response.data))
    .catch((err) => res.send(err.message));
});

app.get("/api/getMatchHistory", (req, res) => {
  axios
    .get(
      `https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${req.query.id}?endIndex=1&api_key=${API_KEY.TOKEN}`
    )
    .then((response) => res.send(response.data))
    .catch((err) => res.send(err.message));
});

app.get("/api/getMatch", (req, res) => {
  axios
    .get(
      `https://na1.api.riotgames.com/lol/match/v4/matches/${req.query.matchId}?api_key=${API_KEY.TOKEN}`
    )
    .then((response) => res.send(response.data))
    .catch((err) => res.send(err.message));
});

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
