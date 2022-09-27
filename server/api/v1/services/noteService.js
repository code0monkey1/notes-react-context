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

exports.updateNote=async (id,note)=>{

  console.log("SERVER: note to be updated: ", 
  JSON.stringify(note,null,2),
  "with id: " + id)

  const updatedNote = await Note.findByIdAndUpdate(id,note,{
            new: true,
            runValidators: true,
            context: 'query',
        })

  return updatedNote
}

