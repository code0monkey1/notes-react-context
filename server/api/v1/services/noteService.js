const Note = require('../models/notesModel')

exports.create=async (note)=>{
     
  console.log("raw note received",note)
      const savedNote = await Note.create(note)

      return savedNote
}

exports.remove=async (id)=>{
    const deletedNote = await Note.findByIdAndDelete(id)

    return deletedNote
}

exports.getNotes=async ()=>{
  const notes = await Note.find({})

  return notes
}

