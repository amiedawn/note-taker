const fs = require('fs');
const util = require('util');
const uuidv1 = require("uuidv1");

// read asynchronously
const readFileNotes = util.promisify(fs.readFile);

const writeFileNotes = util.promisify(fs.writeFile);

// create a class
class Collection {
  readDb() {
    return readFileNotes('db.json', 'UTF-8');
  }

  writeDb(note) {
    return writeFileNotes('db.json', JSON.stringify(note));
  }

  // get notes from database
  getNotes() {
    return this.readDb().then((notes ) => {
      // convert json to array
      let noteArray;
      try {
        // like push, but create new array and add on
        noteArray = [].concat(JSON.parse(notes));
      }
      catch (err) {
        noteArray = [];
      }
      return noteArray;
    })
  }

  addNote() {
    // get title and text and link to its own section in the db
    // check if there is content, if not empty, add unique id
    // use writedb function to add to db
  }
};

module.exports = new Collection();