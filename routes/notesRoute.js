const express = require('express')
const Note = require('../db/notes')

const newNote = new Note

const router = express.Router()

router.get('/notes',(req,res)=>{
    newNote.getNotes(res)
})
router.post('/notes', (req, res) => {
    newNote.addNote(req,res)
});
router.delete('/notes/:id', (req, res) => {
    newNote.rmNote(req,res)
});
module.exports = router