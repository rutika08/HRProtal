const ParticipateModel = require("../model/participate-model")

//add  data
module.exports.addParticipate = function(req, res){

    let status = req.body.status
    
    let user = req.body.user
    let celebration = req.body.celebration

    let participate = new ParticipateModel({
        status: status,
        user: user,
        celebration: celebration
    })

    participate.save(function(err, data){
        if(err){
            res.json({msg:"SMW", status:-1, data:err})
        }
        else{
            res.json({msg:"Celebration Data added...", status:200, data:data})
        }
    })
}

//list of user

module.exports.getAllParticipate = function(req, res){

    ParticipateModel.find().populate("user").populate("celebration").exec(function(err,data){

        if(err){
            res.json({msg:"SMW", status:-1, data:err})
        }
        else{
            res.json({msg:"Participate list...", status:200, data:data})
        }
    })
}

//delete
module.exports.deleteParticipate = function(req, res){

    let participateId = req.params.participateId

    ParticipateModel.deleteOne({_id: participateId}, function(err,data){

        if(err){
            res.json({msg:"SMW", status:-1, data:err})
        }
        else{
            res.json({msg:"Participate Data removed...", status:200, data:data})
        }
    })
}

//update
module.exports.updateParticipate = function(req, res){
    
    let participateId =req.body.participateId
    let status = req.body.status
    let user = req.body.user
    let celebration = req.body.celebration

    ParticipateModel.updateOne({_id:participateId, status: status, user: user, celebration: celebration}, function(err, data){
        
        if(err){
            res.json({msg:"Something went wrong..", status:-1, data:err})
        }
        else{
            res.json({msg:"Updated participate..", status:200, data:data})
        }  
    })
}