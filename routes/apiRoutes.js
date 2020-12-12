const fs = require("fs");
//const router = require("express").router();

// uuid for unique id
const { uuid } = require("uuidv4");

module.exports = function (app) {
  // read file and return notes as json
  app.get("/api/notes", (req, res) => {
    let collection = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    res.json(collection);
  });

  app.post("/api/notes", (req, res) => {
    // get new note from request body
    const newNote = req.body;
    console.log(JSON.stringify(newNote));

    // get new id
    newNote.id = { uuid };

    // read collection from the db.json file
    let collection = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

    // push new note to db.json
    collection.push(newNote);

    // save new note in db.json
    fs.writeFileSync("./db/db.json", JSON.stringify(collection));
    console.log("Note successfully added to file!");

    // Send response
    res.json(collection);
  });
};
