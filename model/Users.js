const { Schema, model } = require('mongoose')


const UserSchema = new Schema({
    email:{
        type:String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    }, 
    officeName:{
        type:String,
        required: true
    }

},{timestamps:true})


const User = model("user", UserSchema)

module.exports = User