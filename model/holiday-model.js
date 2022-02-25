const mongoose = require("mongoose")

//schema
let holidaySchema = new mongoose.Schema({
    holidayName :{
        type : String,
        required :true
    },
    holidayStartDate :{
        type: String,
        required: true
    },
    holidayEndDate:{
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})

//model
let HolidayModel = mongoose.model("holiday", holidaySchema)

module.exports = HolidayModel