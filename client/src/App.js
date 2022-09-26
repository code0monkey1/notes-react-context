import { useReducer, useRef } from "react";
import { ACTIONS, notesReducer } from "./reducers/notesReducer";

const Note=({note,dispatch})=>{
   
  const onToggle=(id) =>{
    console.log("The toggle id is",id)
      dispatch({
        type:ACTIONS.TOGGLE_IMPORTANCE,
        payload:{id}
      })
  }
  const onDelete=(id) =>{
      dispatch({ 
        type:ACTIONS.DELETE_NOTE,
        payload:{id}
      })
  }

  return (
  <li key={note.id}>
      <h3>{note.text}</h3>
      <input type="checkbox" 
      checked={note.important} onChange={()=>{onToggle(note.id)}}
      />

      <button onClick={()=>{ onDelete(note.id)}}>
        Delete
      </button>
  </li>
  )
}

function App() {
  
  // const {notes,dispatch} = useNotesContext()
  const [notes, dispatch] = useReducer(notesReducer,[]);
   const text=useRef()
   const imp=useRef()
   
   const addNote=(e)=>{

      console.log("add note triggered")
      e.preventDefault();
      console.log("text",text.current.value)
      console.log("important",imp.current.checked)
      dispatch({
        type:ACTIONS.CREATE_NOTE,
        payload:{
          text:text.current.value,
          important:imp.current.checked,
          id:Math.floor(Math.random()*10000000)
        }
      })

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
      {notes.map(note =><Note dispatch={dispatch} note={note} />)}
    </ul>
   </div>)

}

export default App;
