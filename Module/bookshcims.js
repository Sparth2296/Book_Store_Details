const mongoose = require('mongoose')

const bookschema = mongoose.Schema({
    bookName:{
        type: String,
        required: true,
    },
    autherName:{
        type: String,
        required: true,
    },
    discreption:{
        type: String,
        required: true,
    },
    price:{
        type: String,
        required: true,
    },
    bookImage:{
        type: String,
        required: true,
    }
})

const admin = mongoose.model('admin' , bookschema);

module.exports = admin;