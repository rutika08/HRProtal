const bcrypt = require("bcrypt")
const RoleModel = require("../model/role-model")

module.exports.addRole = function(req, res){

    //db insert role
    // console.log("1")
    console.log(req.body.roleName);
    //isCreated = true

    let role = new RoleModel({
        roleName: req.body.roleName
    })
    
    role.save(function(err, success){
        if(err){
            console.log(err);
            res.json({msg:"SMW", status:-1, data:req.body})
        }
        else{
            res.json({msg:"role added", status:200, data:success})
        }
    })
}

//list
module.exports.getAllRoles = function(req,res){

    RoleModel.find(function(err,roles){
        if(err){
            res.json({msg:"Something went wrong..", status:-1, data:err})
        }
        else{
            res.json({msg:"Roles..", status:-1, data:roles})
        }
    })
}

//delete
module.exports.deleteRole = function(req,res){

    let roleId = req.params.roleId

    RoleModel.deleteOne({"_id":roleId}, function(err, data){
        if(err){
            res.json({msg:"Something went wrong..", status:-1, data:err})
        }
        else{
            res.json({msg:"Removed..", status:-1, data:data})
        }
    })
}

//update
module.exports.updateRole = function(req, res){
    let roleId =req.body.roleId
    let roleName = req.body.roleName

    RoleModel.updateOne({_id:roleId, roleName:roleName}, function(err, data){
        if(err){
            res.json({msg:"Something went wrong..", status:-1, data:err})
        }
        else{
            res.json({msg:"Updated..", status:-1, data:data})
        }  
    })
}