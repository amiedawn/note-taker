const fs = require("fs");
//const router = require("express").Router();

// uuid for unique id
//const { uuid } = require("uuid");

module.exports = function(router) {
  // read file and return notes as json
  router.get('/notes', (req, res) => {
    let collection = JSON.parse(fs.readFileSync('./db/db.json', 'UTF-8'));
    return res.json(collection);
  })

  router.post('/notes', (req, res) => {
    // get new note from request body
    const newNote = req.body;
    console.log(JSON.stringify(newNote));
    // get new id
    //newNote.id = uuid;
    // read collection from the db.json file
    let collection = JSON.parse(fs.readFileSync('./db/db.json', 'UTF-8'));
    // push new note to db.json
    collection.push(newNote);
    // save new note in db.json
    fs.writeFileSync('./db/db.json', JSON.stringify(collection));
    console.log('Note successfully added to file!');
    // send response
    return res.json(collection);
  })
    

  // read file and get a note with a specific id
  router.get('/notes/:id', (req, res) => {
    let collection = JSON.parse(fs.readFileSync("./db/db.json", "UTF-8"));
    return res.json(collection[req.params.id]);
  })

};