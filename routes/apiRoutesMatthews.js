const router = require("express").Router();
const Collection = require('../db/databaseMatthews');

  // read file and return notes as json
  router.get('/notes', (req, res) => {
    Collection.getNotes().then((notes) => {
      return res.json(notes);
    })
    // 500 is server error
    .catch ((err) => res.status(500).json(err));
  });


  // router.post('/notes', (req, res) => {
  //   const newNote = req.body;
  //   console.log(newNote);
  //  (no push or concat)
  //   return res.json(newNote);
  //});

module.exports = router;
