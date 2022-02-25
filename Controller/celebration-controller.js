const CelebrationModel = require("../model/celebration-model")

//add  data
module.exports.addCelebration = function(req, res){

    let celebrationName = req.body.celebrationName
    let celebrationDate = req.body.celebrationDate
    let celeStartTime = req.body.celeStartTime
    let celeEndTime = req.body.celeEndTime
    let celeVenue = req.body.celeVenue
    let description = req.body.description

    let celebrate = new CelebrationModel({
        celebrationName: celebrationName,
        celebrationDate: celebrationDate,
        celeStartTime: celeStartTime,
        celeEndTime: celeEndTime,
        celeVenue: celeVenue,
        description: description
    })

    celebrate.save(function(err, data){
        if(err){
            res.json({msg:"SMW", status:-1, data:err})
        }
        else{
            res.json({msg:"Celebration Data added...", status:200, data:data})
        }
    })
}

//list of user

module.exports.getAllCelebration = function(req, res){

    CelebrationModel.find(function(err,data){

        if(err){
            res.json({msg:"SMW", status:-1, data:err})
        }
        else{
            res.json({msg:"Celebration list...", status:200, data:data})
        }
    })
}

//delete
module.exports.deleteCelebration = function(req, res){

    let celebrationId = req.params.celebrationId

    CelebrationModel.deleteOne({_id: celebrationId}, function(err,data){

        if(err){
            res.json({msg:"SMW", status:-1, data:err})
        }
        else{
            res.json({msg:"Celebration Data removed...", status:200, data:data})
        }
    })
}

//update
module.exports.updateCelebration = function(req, res){
    
    let celebrationId = req.body.celebrationId
    let celebrationName = req.body.celebrationName
    let celebrationDate = req.body.celebrationDate
    let celeStartTime = req.body.celeStartTime
    let celeEndTime = req.body.celeEndTime
    let celeVenue = req.body.celeVenue
    let description = req.body.description

    CelebrationModel.updateOne({_id:celebrationId, celebrationName: celebrationName,
        celebrationDate: celebrationDate,
        celeStartTime: celeStartTime,
        celeEndTime: celeEndTime,
        celeVenue: celeVenue,
        description: description}, function(err, data){
        
        if(err){
            res.json({msg:"Something went wrong..", status:-1, data:err})
        }
        else{
            res.json({msg:"Updated Celebration Data..", status:200, data:data})
        }  
    })
}