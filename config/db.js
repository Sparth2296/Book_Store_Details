const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/bookData')


const db = mongoose.connection;


db.once("open",(err)=>{
    if (err) {
        console.log(err);
        return flase ;
    }

    console.log("mongoDB is Connected Succssefuly!!!");
    
})