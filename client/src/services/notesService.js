import axios from 'axios'
const BASE_URL = 'http://localhost:4000'

const getAllNotes=async()=>{

  const notes = await axios.get(BASE_URL+'/note')

  return notes
}

const deleteNote=async(id)=>{

  const deletedNote= await axios.delete(BASE_URL+'/note/'+id)

  return deletedNote
}

const createNote  = async(note)=>{
  const createdNote= await axios.post(BASE_URL+'/note',note)

  return createdNote
}

const updateNote = async(id,modifiedNote)=>{

  console.log("note to be updated updated",id,modifiedNote)

  const updatedNote= await axios.patch(BASE_URL+'/note/'+id,modifiedNote)
  
  return updatedNote
}
const things= {
  getAllNotes,
  deleteNote,
  createNote,
  updateNote
}

export default things