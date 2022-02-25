const mongoose = require("mongoose")

//schema
let participateSchema = new mongoose.Schema({
    status: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    celebration:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"celebration"
    }
})

//model
let ParticipateModel = mongoose.model("participate", participateSchema)

module.exports = ParticipateModel