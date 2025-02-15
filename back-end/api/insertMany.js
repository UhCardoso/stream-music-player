// Popula dados do banco de dados com informações locais
import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";

import { db } from "./connect.js";

// Limpa campo id dos arquivos locais
const newArtistArray = artistArray.map((currentArtistsObj) => {
  const newArtistsObj = { ...currentArtistsObj };
  delete newArtistsObj.id;

  return newArtistsObj;
});

const newSongsArray = songsArray.map((currentSongObj) => {
  const newSongObj = { ...currentSongObj };
  delete newSongObj.id;

  return newSongObj;
});

const responseSongs = await db.collection("songs").insertMany(newSongsArray);
const responseArtists = await db
  .collection("artists")
  .insertMany(newArtistArray);

console.log("INSERT SONGS");
console.log(responseSongs);
console.log(" ");
console.log("INSERT ARTISTS");
console.log(responseArtists);
