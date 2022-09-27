import axios from 'axios'


const getAllNotes=async()=>{

  const notes = await axios.get('http://localhost:4000/note')

  return notes
}

const deleteNote=async(id)=>{
  
  const deletedNote= await axios.delete('http://localhost:4000/note/'+id)

  return deletedNote
}

const createNote  = async(note)=>{
  const createdNote= await axios.post('http://localhost:4000/note',note)

  return createdNote
}

const updateNote = async(id,modifiedNote)=>{

  console.log("note to be updated updated",id,modifiedNote)

  const updatedNote= await axios.patch('http://localhost:4000/note/'+id,modifiedNote)
  
  return updatedNote
}
export default {
  getAllNotes,
  deleteNote,
  createNote,
  updateNote
}