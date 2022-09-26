import { createContext, useReducer } from 'react';

export const NotesContext = createContext()

export const actions={
  SET_NOTES:"SET_NOTES",
  CREATE_NOTE:"CREATE_NOTE",
  DELETE_NOTE:"DELETE_NOTE"
} 

export const notesReducer =(state,action) =>{
  
  switch(action.type){
    
    case actions.SET_NOTES:
      return {
         notes:action.payload
      }
    case actions.CREATE_NOTE:
      return {
        notes:[...state.notes, action.payload]
      }
    case actions.DELETE_NOTE:
       const id=action.payload
       
       return{
        notes: state.notes.filter(note => note._id!==id)
       }

      default:
        return state
  }
}

export const NotesContextProvider=({children})=>{
  
  const[state,dispatch] =useReducer(notesReducer,{notes:[]})

return( 
  <NotesContext.Provider value={{...state,dispatch}} >
    {children}
  </NotesContext.Provider>
)
}

