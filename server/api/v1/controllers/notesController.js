const noteService = require('../services/noteService')
/**
 * Creates a new note.
 * @async
 * @function createNote
 * @param {import('express').Request} req - The request object.
 * @param {import('express').Response} res - The response object.
 * @param {import('express').NextFunction} next - The next middleware function.
 */
exports.createNote=async (req,res,next) => {
    
     try{

      const savedNote =await noteService.create(req.body)

      console.log("Note saved successfully",JSON.stringify(savedNote))
        
      res.status(200).json({success:true,message:savedNote})

     }catch(err){

       console.error("Note not saved",err.message)

        next(err)
     }

}
/**
 * Creates a new note.
 * @async
 * @function createNote
 * @param {import('express').Request} req - The request object.
 * @param {import('express').Response} res - The response object.
 * @param {import('express').NextFunction} next - The next middleware function.
 */
exports.deleteNote=async(req, res, next)=>{

  const {id}=req.params
   
  try{

    const deletedNote = await noteService.remove(id)

    if(!deletedNote){
        logger.error(`Note not deleted `)
        return res.status(404).send({success: false,message: 'Note not deleted'})
    }

    res.status(200).send({success: true,message:deletedNote})
  

  }catch(err){
      console.error("Error while deleting note",err.message)
      next(err)
  }
}
/**
 * Creates a new note.
 * @async
 * @function createNote
 * @param {import('express').Request} req - The request object.
 * @param {import('express').Response} res - The response object.
 * @param {import('express').NextFunction} next - The next middleware function.
 */
exports.getNotes=async (req, res, next) => {
    
  try{
    const notes = await noteService.getNotes()

    res.status(200).send({success:true, message:notes})
    
  }catch(err){
     console.error('Error while reading notes',err.message)
     next(err)

  }
}

/**
 * Creates a new note.
 * @async
 * @function createNote
 * @param {import('express').Request} req - The request object.
 * @param {import('express').Response} res - The response object.
 * @param {import('express').NextFunction} next - The next middleware function.
 */
exports.updateNote=async (req, res, next) => {

  try{
    const {id}=req.params

    console.log("SERVER: The id of the note",id,"the note body is:",JSON.stringify(req.body,null,2))

    const updateNote = await noteService.updateNote(id,req.body)

    res.status(201).send({success:true, message:updateNote})

  }catch(err){

    console.error("Error while updating notes",err.message)
    next(err)
  }
}