require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const notes= require('./api/v1/routers/notesRouter')
const app = express();


mongoose
.connect(process.env.MONGODB_URL)
.then(res =>{

  console.log("MongoDb Connected")

})
.catch(err =>{
   console.error('MongoDb Connection Error')
})


app.use(express.json())

app.use('/note',notes)


app.listen(4000,()=>{

  console.log("App listening to port 4000");
})