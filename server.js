// Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");
const uuidv1 = require("uuidv1");
const util = require("util");
const app = express();

var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// Data
const noteData = require("./db/db.json");


// Routes
// serves homepage
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// serves notes page
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});


// ======== GET ========
// read db.json file
// parse
// return parsed data as JSON
app.get("/api/notes/", function (req, res) {
  readFileAsync("./db/db.json", "utf8").then(data => {
    const parsedData = JSON.parse(data);
    res.json(parsedData);
    res.end();
  });
});


// ======== POST ========
// grab new note
// add ID to new note
// write new note to notes database
// return new note to be rendered to page
app.post("/api/notes", function (req, res) {
  const { title, text } = req.body;
  const newNote = { title, text, id: uuidv1() }
  noteData.push(newNote);
  res.json(noteData);
  writeFileAsync("./db/db.json", JSON.stringify(noteData), function (err) {
    res.end();
  });
});


// ======== DELETE ========
// compare note IDs to the selected ID
// find index of selected ID
// push remaining notes to array
// since new array writes the newly-empty object to the end of the array, splice last object in array
// writeFile with new array
app.delete("/api/notes/:id", function (req, res) {
  const deleteId = req.params.id;
  const newNoteData = req.body;
  const remainingNotes = noteData.filter(noteObj => noteObj.id !== deleteId);
  remainingNotes.push(newNoteData);
  remainingNotes.splice((remainingNotes.length - 1), 1)
  res.json(remainingNotes);
  writeFileAsync("./db/db.json", JSON.stringify(remainingNotes), function (err) {
    res.end();
  });
});


// Listener
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

