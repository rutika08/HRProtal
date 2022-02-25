const LeaveModel = require("../model/leave-model")

//add  data
module.exports.addLeave = function(req, res){

    let leaveReason = req.body.leaveReason
    let leaveStartDate = req.body.leaveStartDate
    let leaveEndDate = req.body.leaveEndDate
    let acceptOrReject = req.body.acceptOrReject
    let user = req.body.user

    let leave = new LeaveModel({
        leaveReason: leaveReason,
        leaveStartDate: leaveStartDate,
        leaveEndDate: leaveEndDate,
        acceptOrReject : acceptOrReject,
        user: user
    })

    leave.save(function(err, data){
        if(err){
            res.json({msg:"SMW", status:-1, data:err})
        }
        else{
            res.json({msg:"Leave Details added...", status:200, data:data})
        }
    })
}

//list of user

module.exports.getAllLeave = function(req, res){

    LeaveModel.find().populate("user").exec(function(err,data){

        if(err){
            res.json({msg:"SMW", status:-1, data:err})
        }
        else{
            res.json({msg:"Leave list...", status:200, data:data})
        }
    })
}

//delete
module.exports.deleteLeave = function(req, res){

    let leaveId = req.params.leaveId

    LeaveModel.deleteOne({_id:leaveId}, function(err,data){

        if(err){
            res.json({msg:"SMW", status:-1, data:err})
        }
        else{
            res.json({msg:"Leave Data removed...", status:200, data:data})
        }
    })
}

//update
module.exports.updateLeave = function(req, res){
    let leaveId =req.body.leaveId
    let leaveReason = req.body.leaveReason
    let leaveStartDate = req.body.leaveStartDate
    let leaveEndDate = req.body.leaveEndDate
    let acceptOrReject = req.body.acceptOrReject
    let user = req.body.user

    LeaveModel.updateOne({_id:leaveId, leaveReason: leaveReason,
        leaveStartDate: leaveStartDate,
        leaveEndDate: leaveEndDate,
        acceptOrReject : acceptOrReject, user:user}, function(err, data){
        
        if(err){
            res.json({msg:"Something went wrong..", status:-1, data:err})
        }
        else{
            res.json({msg:"Updated Leave..", status:200, data:data})
        }  
    })
}