const path = require('path');
var notes = require('./db.json');
const fs = require('fs');

class Note {
    getNotes(res) {
        res.json(notes);
    }
    addNote(req, res) {
        const noteId = { id: notes.length + 1, ...req.body };
        notes.push(noteId);

        const filePath = path.join(__dirname, 'db.json');
        fs.writeFileSync(filePath, JSON.stringify(notes, null, 2));

        res.send('DONE');
    }
    rmNote(req, res) {
        const findID = req.params.id;
        notes = notes.filter((note) => String(note.id) !== findID);

        const filePath = path.join(__dirname, 'db.json');
        fs.writeFileSync(filePath, JSON.stringify(notes, null, 2));

        res.send(`Note with ID ${findID} deleted successfully`);
    }
}

module.exports = Note;




