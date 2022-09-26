const {Schema,model} = require('mongoose')

const noteSchema= new Schema({

  text:{
    type:String,
    required:true
  },
  imp:{
    type:Boolean,
    required:true
  }

},{
  timestamps:true
})


module.exports=model('Note',noteSchema)