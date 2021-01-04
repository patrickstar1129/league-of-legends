import React, { useState } from "react";
import "./Search.css";
import axios from "axios";

function Search({handleInputChange}) {
  const [input, setInput] = useState("");
  const [players, setPlayers] = useState("");
  const [goldEarned, setGoldEarned] = useState('');
  const searchBarStyle = {
    width: "20rem",
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem",
    outline: 0,
  };

  const submit = () => {
   axios
      .get(`/api/getSummoner`, {
        params: {
          name: input,
        },
      })
      .then((res) => {
        axios
          .get("/api/getMatchHistory", {
            params: {
              id: res.data.accountId,
            },
          })
          .then((res) => {
            axios
              .get("/api/getMatch", {
                params: {
                  matchId: res.data.matches[0].gameId,
                },
              })
              .then((res) => setPlayers(res.data));
          });
      })
      .catch((err) => console.log(err));

        const findPlayerId = (players) => {
        if (!players) {
          return;
        }
        const playerArray = players.participantIdentities;
        let playerId;
        for (let i = 0; i < playerArray.length; i++) {
          if (playerArray[i].player.summonerName.toLowerCase() === input) {
            playerId = playerArray[i].participantId
          }
        }

        const playerStatsArray = players.participants;
        let gold;
        for (let i = 0; i < playerStatsArray.length; i++) {
          const currentPlayer = playerStatsArray[i];
          if (currentPlayer.stats.participantId === playerId) {
            gold = currentPlayer.stats.goldEarned
          }
        }
        return gold;
      }
      setGoldEarned(findPlayerId(players))
  };

  return (
    <div>
      <input
        style={searchBarStyle}
        placeholder={"Enter Summoner Name"}
        onChange={(e) => handleInputChange(e)}
      />
      <button onClick={submit}>Click me</button>
    </div>
  );
}

export default Search;
