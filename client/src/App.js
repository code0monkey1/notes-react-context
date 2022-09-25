import { useEffect, useState } from 'react';
import { createNote, deleteNote, getAllNotes } from '../src/services/notesService';
import { actions } from './context/notesContext';
import { useNotesContext } from './hooks/useNotesContext';
function App() {

  const {notes,dispatch} = useNotesContext()


  const [note,setNote]=useState('')
  const[imp,setImp]=useState(false)

  useEffect(()=>{ 
    
    getAllNotes()
    .then(res=>{
      console.log("The data obtained from the server is",res.data)
        if(res.data.success){
           dispatch({
            type:actions.SET_NOTES,
            payload:res.data.message
          })
        }
        else{
          console.error("Error: did not get notes",JSON.stringify(res.data))
        }
    })
    .catch(err=>{
      console.error("Error getting all notes from server",err.message)
    })

  },[])


  const submitNote=async(event) => {
       
    event.preventDefault();
    
    const response =await createNote({text:note,imp})
   
    if(!response.data.success) {
      console.error("Error creating note")
    }
    else{
      console.log("Note created",response.data.message)
      dispatch({
        type:actions.CREATE_NOTE,
        payload:response.data.message
      })
    }
  }  
  
  const removeNote =async(id)=>{
    
    const response = await deleteNote(id)
     
    if(!response.data.success) {
      console.error('Error deleting note',response.data)
    }
    else{
      console.log("Note deleted",response.data.message)
      dispatch({
        type: actions.DELETE_NOTE,
        payload: id
      })
    }
  }
  
  return (
    <div className="App">
      <h1>Notes</h1>
        <ol>
      {
       notes && notes.map(note =>
        
       <li id={note._id}>
          <span> {note.text}</span> <span>{note.imp}</span>
          <input type='checkbox' checked={note.imp}/>
          <button onClick={()=>removeNote(note._id)}>Delete</button>
        </li>)
      }
        </ol>
      <hr/>
      <form>
        
        <h2>New Note</h2>
        
        <input
        type="text"
          name="note"
          onChange={({target})=>{setNote(target.value)}}
          />
          
        <input 
        type="checkbox" 
        name="checkbox" 
        onClick={()=>setImp(imp=>!imp)}
        />
        
        <button 
        name="submit" onClick={submitNote}>
          Submit 
        </button>
      </form>
    </div>
  );
}

export default App;
