  export const ACTIONS={
    CREATE_NOTE:'create',
    DELETE_NOTE:'delete',
    TOGGLE_IMPORTANCE:'toggle',
    SET_NOTES:'set_notes'
  }

  export const notesReducer = (state,action) => {
      console.log("The action is ", action.type)

    switch (action.type) {
         case ACTIONS.SET_NOTES:
          console.log("set noes reducer",action.payload)
           return{
            ...state,notes:action.payload
           }
          case ACTIONS.CREATE_NOTE:
              console.log("create note action hit",action.payload)
              return {
                ...state,notes:state.notes.concat(action.payload)
              }
          case ACTIONS.DELETE_NOTE:  
                 console.log("delete note hit", action.payload)
              return {
                ...state,notes:state.notes.filter(note => note._id!==action.payload.id)
              }
          case ACTIONS.TOGGLE_IMPORTANCE:
            console.log("toggle importance hit", action.payload)
              return {
                ...state,notes:state.notes.map(
              note =>note._id===action.payload.id?
              {...note,important:!note.important}:note
              )
            }
          default:
            return state
        }
    
  }