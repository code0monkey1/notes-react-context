const router = require('express').Router()
const notesController = require('../controllers/notesController')


router.post('/',notesController.createNote)

router.delete('/:id', notesController.deleteNote)

router.get('/',notesController.getNotes)

router.patch('/:id', notesController.updateNote)

module.exports=router