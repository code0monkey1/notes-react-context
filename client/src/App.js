import { useEffect, useRef } from "react";
import { useNotesContext } from './hooks/useNotesContext';
import { ACTIONS } from "./reducers/notesReducer";
import notesService from "./services/notesService";

const Note=({note,dispatch})=>{
   
  const onToggle=async(note,id) =>{
  
    try{

      console.log("The toggle id is",id)
        
      const response = await notesService
      .updateNote(id,{...note,important:!note.important})

      if(!response.data.success){
        console.error("Error deleting note",JSON.stringify(response.data,null,2))
        return
      }

      dispatch({
        type:ACTIONS.TOGGLE_IMPORTANCE,
        payload:{id}
      })
      
    }
    catch(err) {console.error("Error while deleting note",err.message)}

    
    
  }
  const onDelete=async(id) =>{
    console.log("onDelete called with id: " + id)
    try{
      const response= await notesService.deleteNote(id)
       
       if(!response.data.success){
        console.error("Error deleting note: " + response.data)
        return
       }
        
        dispatch({ 
        type:ACTIONS.DELETE_NOTE,
        payload:{id}
      })

    }
    
      catch(err) {
       console.error("Error deleting note: " + err.message)
      }
  }

  return (
  <li key={note._id}>
      <h3>{note.text}</h3>
      <input type="checkbox" 
      checked={note.important} onChange={()=>{onToggle(note,note._id)}}
      />

      <button onClick={()=>{ onDelete(note._id)}}>
        Delete
      </button>
  </li>
  )
}

function App() {
  
  const {notes,dispatch} = useNotesContext()
  
  console.log("The notes are",notes)
  
   const text=useRef()
   const imp=useRef()

   useEffect(()=>{
        notesService.getAllNotes()
        .then(response=>{
          const notes=response.data.message

          console.log("The notes retrieved are ",notes)
          
          dispatch({
            type:ACTIONS.SET_NOTES,
            payload:notes
          })
          
        }).catch(error=>{
          console.error("Error fetching notes",error.message)
        })
    
   },[])
   
   const addNote=async(e)=>{

      console.log("add note triggered")
      e.preventDefault();
      console.log("text",text.current.value)
      console.log("important",imp.current.checked)
      
      try{
        const response= await notesService.createNote({
            text:text.current.value,
            important:imp.current.checked,
        })
         console.log("Recieved note",JSON.stringify(response.data.message,null,2))
       dispatch({
          type:ACTIONS.CREATE_NOTE,
          payload:response.data.message
      })

      }catch(e){
        console.error("Error creating note: " + e.message)
      }

      text.current.value=''
      imp.current.checked=false

   }
   return(
   <div>
    <form onSubmit={addNote}>
      <input ref={text} type="text" placeholder='enter text'/>
      <input ref={imp} type="checkbox"/>
      <button >Add Note</button>
    </form>
    Notes:
    <ul>
      {notes?.map(note =><Note dispatch={dispatch} note={note} />)}
    </ul>
   </div>)

}

export default App;
