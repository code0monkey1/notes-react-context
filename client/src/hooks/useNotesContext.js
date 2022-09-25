import { useContext } from 'react';
import { NotesContext } from '../context/notesContext';

export const useNotesContext =()=>{
    
  const context = useContext(NotesContext);

  if(!context){
    throw Error('Notes Context used outside scope')
  }

  return context
}