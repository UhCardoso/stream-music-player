import React from "react";
import "./style.css";
import Player from "../../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../../assets/database/songs";
import { artistArray } from "../../assets/database/artists";

const Song = () => {
  const { id } = useParams();

  const songObj = songsArray.filter(
    (currentSongObj, index) => currentSongObj._id === id
  )[0];

  const artistObj = artistArray.filter(
    (currentArtistObj, index) => currentArtistObj.name === songObj.artist
  )[0];

  const songsArrayFromArtist = songsArray.filter(
    (currentSongsObj, index) => currentSongsObj.artist === artistObj.name
  );

  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const randomIndex2 = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;
  const randomIdFromArtis2 = songsArrayFromArtist[randomIndex2]._id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={songObj.image} alt={`Imagem da musica ${songObj.name}`} />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
          <img
            src={artistObj.image}
            alt={`Imagem do artista ${artistObj.name}`}
            width={75}
            height={75}
          />
        </Link>

        <Player
          duration={songObj.duration}
          randomIdFromArtist={randomIdFromArtist}
          randomIdToFromArtist={randomIdFromArtis2}
          audio={songObj.audio}
        />

        <div>
          <p className="song__name">{songObj.name}</p>
          <p>{artistObj.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
