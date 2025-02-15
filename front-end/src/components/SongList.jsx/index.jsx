import React, { useState } from "react";
import "./style.css";
import SongItem from "../SongItem";

const SongList = ({ songsArray }) => {
  const [itens, setItens] = useState(5);

  return (
    <div className="song-list">
      {songsArray
        .filter((currentValue, index) => index < itens)
        .map((currentSongObj, index) => (
          <SongItem {...currentSongObj} index={index} key={index} />
        ))}

      {songsArray.length > itens ? (
        <p
          className="song-list__see-more"
          onClick={() => {
            setItens(itens + 5);
          }}
        >
          Ver mais
        </p>
      ) : (
        <p
          className="song-list__see-more"
          onClick={() => {
            setItens(itens - 5);
          }}
        >
          Ver menos
        </p>
      )}
    </div>
  );
};

export default SongList;
