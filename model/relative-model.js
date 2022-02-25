const mongoose = require("mongoose")

//schema
let RelativeSchema = new mongoose.Schema({
    relativeName :{
        type : String,
        required: true
    },
    occupation :{
        type: String,
        required: true
    },
    contactNumber:{
        type: Number,
        unique: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})

//model
let RelativeModel = mongoose.model("relative", RelativeSchema)

module.exports = RelativeModel