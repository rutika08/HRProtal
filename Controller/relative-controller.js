const RelativeModel = require("../model/relative-model")

//add  data
module.exports.addRelative = function(req, res){

    let relativeName= req.body.relativeName
    let occupation = req.body.occupation
    let contactNumber = req.body.contactNumber
    
    let user = req.body.user

    let relative = new RelativeModel({
        relativeName: relativeName,
        occupation: occupation,
        contactNumber: contactNumber,
        user: user
    })

    relative.save(function(err, data){
        if(err){
            res.json({msg:"SMW", status:-1, data:err})
        }
        else{
            res.json({msg:"Relative Data added...", status:200, data:data})
        }
    })
}

//list of user

module.exports.getAllRelative = function(req, res){

    RelativeModel.find().populate("user").exec(function(err,data){

        if(err){
            res.json({msg:"SMW", status:-1, data:err})
        }
        else{
            res.json({msg:"Relative list...", status:200, data:data})
        }
    })
}

//delete
module.exports.deleteRelative = function(req, res){

    let relativeId = req.params.relativeId

    RelativeModel.deleteOne({_id: relativeId}, function(err,data){

        if(err){
            res.json({msg:"SMW", status:-1, data:err})
        }
        else{
            res.json({msg:"Relative Data removed...", status:200, data:data})
        }
    })
}

//update
module.exports.updateRelative = function(req, res){
    let relativeId =req.body.relativeId
    let relativeName = req.body.relativeName
    let occupation = req.body.occupation
    let contactNumber = req.body.contactNumber
    let user = req.body.user

    HolidayModel.updateOne({_id:relativeId, relativeName: relativeName,
        occupation: occupation,
        contactNumber: contactNumber, userr:user}, function(err, data){
        
        if(err){
            res.json({msg:"Something went wrong..", status:-1, data:err})
        }
        else{
            res.json({msg:"Updated Relative..", status:200, data:data})
        }  
    })
}