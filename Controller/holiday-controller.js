const HolidayModel = require("../model/holiday-model")

//add  data
module.exports.addHoliday = function(req, res){

    let holidayName = req.body.holidayName
    let holidayStartDate = req.body.holidayStartDate
    let holidayEndDate = req.body.holidayEndDate
    
    let user = req.body.user

    let holiday = new HolidayModel({
        holidayName: holidayName,
        holidayStartDate: holidayStartDate,
        holidayEndDate: holidayEndDate,
        user: user
    })

    holiday.save(function(err, data){
        if(err){
            res.json({msg:"SMW", status:-1, data:err})
        }
        else{
            res.json({msg:"Holiday Data added...", status:200, data:data})
        }
    })
}

//list of user

module.exports.getAllHoliday = function(req, res){

    HolidayModel.find().populate("user").exec(function(err,data){

        if(err){
            res.json({msg:"SMW", status:-1, data:err})
        }
        else{
            res.json({msg:"Holiday list...", status:200, data:data})
        }
    })
}

//delete
module.exports.deleteHoliday = function(req, res){

    let holidayId = req.params.holidayId

    HolidayModel.deleteOne({_id: holidayId}, function(err,data){

        if(err){
            res.json({msg:"SMW", status:-1, data:err})
        }
        else{
            res.json({msg:"Holiday Data removed...", status:200, data:data})
        }
    })
}

//update
module.exports.updateHoliday = function(req, res){
    
    let holidayId =req.body.holidayId
    let holidayName = req.body.holidayName
    let holidayStartDate = req.body.holidayStartDate
    let holidayEndDate = req.body.holidayEndDate
    let user = req.body.user

    HolidayModel.updateOne({_id:holidayId, holidayName:holidayName, holidayStartDate:holidayStartDate, holidayEndDate:holidayEndDate, user:user}, function(err, data){
        
        if(err){
            res.json({msg:"Something went wrong..", status:-1, data:err})
        }
        else{
            res.json({msg:"Updated Holiday..", status:200, data:data})
        }  
    })
}