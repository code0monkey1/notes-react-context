import { useContext } from 'react';
import { NotesContext } from '../context/notesContext';

export const useNotesContext =()=>{
    
  const context = useContext(NotesContext);

  if(!context)
    throw Error('Notes Context should be used within NotesContextProvider')
  
  return context
}