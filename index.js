const express = require("express")
const mongoose = require("mongoose")

const sessionController = require("./Controller/session-controller")
const roleController = require("./Controller/role-controller")
const userController = require("./Controller/user-controller")
const holidayController = require("./Controller/holiday-controller")
const leaveController = require("./Controller/leave-controller")
const relativeController = require("./Controller/relative-controller")
const celebrationController = require("./Controller/celebration-controller")
const participateController = require("./Controller/participate-controller")

const app = express()

//middle ware
app.use(express.json())     //mobile -> accept json data from request and set data into body
app.use(express.urlencoded({extended:true}))        //web -> accept url encoded data from request and set data into body

//database
mongoose.connect('mongodb://localhost:27017/HRPortal', function(err){
    if(err)
    {
        console.log("db connection fail..")
        console.log(err);
    }//end of if
    else
    {
        console.log("db Connected...")
    }//end of else
})

//urls
app.get("/", function(req, res){
    res.write("welcome...!!")
    res.end()
})

// app.get("/login", function(req, res){
//     res.write("Login...")
//     res.end()
// })

// app.get("/signup", function(req, res){
//     res.write("Sign Up..")
//     res.end()
// })

app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup)
app.post("/saveuser",sessionController.saveuser)

//role
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRole)
app.put("/roles",roleController.updateRole)

//user
app.post("/users",userController.addUser)
app.get("/users",userController.getAllUsers)
app.delete("/users/:userId",userController.deleteUser)
app.put("/users",userController.updateUser)

app.post("/login",userController.login)

//holiday
app.post("/holiday",holidayController.addHoliday)
app.get("/holiday", holidayController.getAllHoliday)
app.delete("/holiday/:holidayId", holidayController.deleteHoliday)
app.put("/holiday", holidayController.updateHoliday)

//leave
app.post("/leave",leaveController.addLeave)
app.get("/leave", leaveController.getAllLeave)
app.delete("/leave/:leaveId", leaveController.deleteLeave)
app.put("/leave", leaveController.updateLeave)

//relative
app.post("/relative",relativeController.addRelative)
app.get("/relative", relativeController.getAllRelative)
app.delete("/relative/:relativeId", relativeController.deleteRelative)
app.put("/relative", relativeController.updateRelative)

//celebration
app.post("/celebration",celebrationController.addCelebration)
app.get("/celebration", celebrationController.getAllCelebration)
app.delete("/celebration/:celebrationId", celebrationController.deleteCelebration)
app.put("/celebration", celebrationController.updateCelebration)

//participate
app.post("/participate",participateController.addParticipate)
app.get("/participate", participateController.getAllParticipate)
app.delete("/partiipate/:participateId", participateController.deleteParticipate)
app.put("/participate", participateController.updateParticipate)

//server
app.listen(3300,function(){
    console.log("Server started on 3300")
})