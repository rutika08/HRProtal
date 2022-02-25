const mongoose = require("mongoose")

//schema
let leaveSchema = new mongoose.Schema({
    leaveReason :{
        type : String,
        required :true
    },
    leaveStartDate :{
        type: String,
        required: true
    },
    leaveEndDate:{
        type: String,
        required: true
    },
    acceptOrReject:{
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})

//model
let LeaveModel = mongoose.model("leave", leaveSchema)

module.exports = LeaveModel