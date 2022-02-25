const mongoose = require("mongoose")

//schema
let UserSchema = new mongoose.Schema({
    firstName :{
        type : String,
        required: true
    },
    lastName :{
        type: String,
        required: true
    },
    email :{
        type : String,
        required: true,
        unique: true
    },
    password :{
        type: String,
        required: true
    },
    userContact: {
        type: Number,
        required: true,
        unique: true
    },
    address:{
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    experienceYear: {
        type: Number
    },
    joiningDate: {
        type: Date
    },
    isActive: {
        type: String,
        //required: true
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"role"
    }
})

//model
let UserModel = mongoose.model("user", UserSchema)

module.exports = UserModel