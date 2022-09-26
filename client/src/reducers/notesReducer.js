  export const ACTIONS={
    CREATE_NOTE:'create',
    DELETE_NOTE:'delete',
    TOGGLE_IMPORTANCE:'toggle'
  }

  export const notesReducer = (notes,action) => {
      console.log("The action is ", action.type,action.payload)
    switch (action.type) {
        case ACTIONS.CREATE_NOTE:
            console.log("create note action hit",action.payload)
            return notes.concat(action.payload)
        case ACTIONS.DELETE_NOTE:  
            return notes.filter(note => note.id!==action.payload.id)
        case ACTIONS.TOGGLE_IMPORTANCE:
          console.log("toggle importance hit", action.payload)
             return notes.map(
            note =>note.id===action.payload.id?
            {...note,important:!note.important}:note
            ) 
        default:
          return notes
    }
    
  }