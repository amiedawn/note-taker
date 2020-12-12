const fs = require("fs");
//const router = require("express").router();

// uuid for unique id
const { v4: uuidV4 } = require("uuid");

module.exports = function (app) {
  // read file and return notes as json
  app.get("/api/notes", (req, res) => {
    let collection = JSON.parse(fs.readFileSync("./db/db.json", "UTF-8"));
    res.json(collection);
  });

  app.post("/api/notes", (req, res) => {
    // get new note from request body
    console.log("req.body: ", req.body);
    const newNote = req.body;

    console.log(JSON.stringify(newNote));

    // get new id
    newNote.id = uuidV4();

    // read collection from the db.json file
    let collection = JSON.parse(fs.readFileSync("./db/db.json", "UTF-8"));

    // push new note to db.json
    collection.push(newNote);

    // save new note in db.json
    fs.writeFileSync("./db/db.json", JSON.stringify(collection));
    console.log("Note successfully added to file!");

    // Send response
    res.json(collection);
  });
};
