const noteService = require('../services/noteService')

exports.createNote=async (req,res,next) => {
    
     try{

      const savedNote =await noteService.create(req.body)

      console.log("Note saved successfully",JSON.stringify(savedNote))
        
      res.status(200).json({success:true,message:savedNote})

      next()

     }catch(err){

       console.error("Note not saved",err.message)

        next(err)
     }

}

exports.deleteNote=async(req, res, next)=>{

  const {id}=req.params
   
  try{

    const deletedNote = await noteService.remove(id)

    if(!deletedNote){
        logger.error(`Note not deleted `)
        return res.status(404).send({success: false,message: 'Note not deleted'})
    }

    res.status(200).send({success: true,message:deletedNote})
    
    next()

  }catch(err){
      console.error("Error while deleting note",err.message)
      next(err)
  }
}

exports.getNotes=async (req, res, next) => {
    
  try{
    const notes = await noteService.getNotes()

    res.status(200).send({success:true, message:notes})

    next()
    
  }catch(err){
     console.error('Error while reading notes',err.message)
     next(err)

  }
}