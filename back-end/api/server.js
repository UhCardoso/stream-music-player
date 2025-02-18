import express from "express";
import cors from "cors";
import { db } from "./connect.js";

import path from 'path';

const __dirname = path.resolve();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/api/", (req, res) => {
  return res.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
});

app.get("/api/artists", async (req, res) => {
  return res.send(await db.collection("artists").find({}).toArray());
});

app.get("/api/songs", async (req, res) => {
  return res.send(await db.collection("songs").find({}).toArray());
});

app.use(express.static(path.join(__dirname, '../../front-end/dist')));

app.get("*", async (req, res) => {
  return res.sendFile(path.join(__dirname, '../../front-end/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
