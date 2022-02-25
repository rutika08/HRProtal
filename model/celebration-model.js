const mongoose = require("mongoose")

//schema
let celebrationSchema = new mongoose.Schema({
    celebrationName :{
        type : String,
        required :true
    },
    celebrationDate:{
        type: String,
        required: true
    },
    celeStartTime :{
        type: String,
        required: true
    },
    celeEndTime:{
        type: String,
        required: true
    },
    celeVenue:{
        type: String,
        required: true
    },
    description: {
        type: String
    }
})

//model
let CelebrationModel = mongoose.model("celebrate", celebrationSchema)

module.exports = CelebrationModel