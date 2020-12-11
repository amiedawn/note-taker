const fs = require("fs");
const router = require("express").Router();

// uuidv4 for unique id
const { uuid } = require("uuidv4");

// read file and return notes as json
router.get('api/notes', (req, res) => {
  let collection = JSON.parse(fs.readFileSync('./db/db.json', 'UTF-8'));
  return res.json(collection);
});

// router.post('/notes', (req, res) => {
//   const newNote = req.body;
//   console.log(newNote);
//  (no push or concat)
//   return res.json(newNote);
//});

module.exports = router;
