const mongoose = require('mongoose')


let users =new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    }
})

let userModel = mongoose.model('users',users)

module.exports ={
    userModel
}