import React, { useState, useEffect } from "react";
import axios from "axios";

function Response() {
  const [loading, setLoading] = useState(false);
  const [artist, setArtist] = useState([]);
  const [song, setSong] = useState([]);
  const [allStations, setAllStations] = useState([]);

  axios
    .get(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        "https://www.radiorecord.ru/api/stations/now/"
      )}`
    )
    .then((res) => res.data)
    .then((data) => {
      const { result } = data;
      const station = result.data.find((r) => r.prefix === "rr");
      const { artist, song } = station;
      this.setArtist({
        artist,
      });
      console.log("artist", artist);
      this.setSong({
        song,
      });
    });

  return (
    <>
      <div>
        {loading ? (
          <h4>Loading...</h4>
        ) : (
          artist.map((item) => (
            // Presently we only fetch
            // title from the API
            <h4>{item.artist}</h4>
          ))
        )}
      </div>
      <div>
        {loading ? (
          <h4>Loading...</h4>
        ) : (
          song.map((item) => (
            // Presently we only fetch
            // title from the API
            <h4>{item.song}</h4>
          ))
        )}
      </div>
    </>
  );
}

export default Response;
