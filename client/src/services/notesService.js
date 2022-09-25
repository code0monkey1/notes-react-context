import axios from 'axios'


export const getAllNotes=async()=>{

  const notes = await axios.get('/note')

  return notes
}

export const deleteNote=async(id)=>{
  
  const deletedNote= await axios.delete('/note/'+id)

  return deletedNote
}

export const createNote  = async(note)=>{
  const createdNote= await axios.post('/note',note)

  return createdNote
}

