const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("");
});

app.get("/api/notes", (req, res) => {
  res.send(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on ${PORT}`));
