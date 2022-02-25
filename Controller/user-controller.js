const bcrypt = require("bcrypt")
const UserModel = require("../model/user-model")


module.exports.addUser = function(req, res){

    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let email = req.body.email
    let password = req.body.password
    let userContact = req.body.userContact
    
    let encPassword = bcrypt.hashSync(password, 10)
    let address = req.body.address
    let qualification = req.body.qualification
    let experienceYear = req.body.experienceYear
    let joiningDate = req.body.joiningDate
    let isActive = req.body.isActive
    let role = req.body.role

    let user = new UserModel({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: encPassword,
        userContact: userContact,
        address: address,
        qualification: qualification,
        experienceYear: experienceYear,
        joiningDate: joiningDate,
        isActive: isActive,
        role: role
    })

    user.save(function(err, data){
        if(err){
            res.json({msg:"SMW", status:-1, data:err})
        }
        else{
            res.json({msg:"User added...", status:200, data:data})
        }
    })
}

//list of user

module.exports.getAllUsers = function(req, res){

    UserModel.find().populate("role").exec(function(err,data){

        if(err){
            res.json({msg:"SMW", status:-1, data:err})
        }
        else{
            res.json({msg:"User added...", status:200, data:data})
        }
    })
}

//delete
module.exports.deleteUser = function(req, res){

    let userId = req.params.userId

    UserModel.deleteOne({_id: userId}, function(err,data){

        if(err){
            res.json({msg:"SMW", status:-1, data:err})
        }
        else{
            res.json({msg:"User removed...", status:200, data:data})
        }
    })
}

//update
module.exports.updateUser = function(req, res){
    let userId =req.body.userId
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let email = req.body.email
    let userContact = req.body.userContact
    let address = req.body.address
    let qualification = req.body.qualification
    let experienceYear = req.body.experienceYear
    let joiningDate = req.body.joiningDate
    let isActive = req.body.isActive
    let role = req.body.role

    UserModel.updateOne({_id:userId, firstName:firstName, lastName:lastName, email:email, userContact:userContact, address: address, qualification: qualification, experienceYear: experienceYear, joiningDate: joiningDate, isActive: isActive,role:role}, function(err, data){
        if(err){
            res.json({msg:"Something went wrong..", status:-1, data:err})
        }
        else{
            res.json({msg:"Updated..", status:200, data:data})
        }  
    })
}

//loginnpm i bcrypt
module.exports.login = function(req, res){

    let param_email = req.body.email
    let param_password = req.body.password

    let isCorrect = false;

    UserModel.findOne({email:param_email}, function(err, data){
        if(data){
            let ans = bcrypt.compareSync(param_password, data.password)
            if(ans == true){
                isCorrect = true
            }
        }

        if(isCorrect == false){
            res.json({msg:"Invalid Credentials...", status:-1, data:req.body})
        }
        else{
            res.json({msg:"Login...", status:200, data:data})
        }
    })
}