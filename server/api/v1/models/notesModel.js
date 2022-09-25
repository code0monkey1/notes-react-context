const {Schema,model} = require('mongoose')

const noteSchema= new Schema({

  text:String,
  imp:Boolean

},{
  timestamps:true
})


module.exports=model('Note',noteSchema)