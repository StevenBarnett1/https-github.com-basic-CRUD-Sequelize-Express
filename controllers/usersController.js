
const User = require("../models/User")

exports.createUserGet = (req,res) => {
    res.render("newUserForm")
}

exports.createUserPost = (req,res) => {
    console.log(req.body)
    User.create({firstName:req.body.firstName,lastName:req.body.lastName})
        .then(user=> res.send(user))
        .catch(error => console.error(error))
}

exports.deleteUser = (req,res) => {
    console.log("DELETE USER CONTROLLER")
    User.destroy({where:{id:req.params.id}})
    res.redirect("/users")
}

exports.getUserId = (req,res) => {
    console.log("GET USER ID CONTROLLER")
    User.findOne({where: {id:req.params.id}})
        .then(user => {res.render("deleteUser",{user:user.dataValues})})
        .catch(error=>console.error("ERROR HERE",error))
}

exports.getIndex = (req,res) => {
    User.findAll().then(users=>res.send(users)).catch(error =>res.send(error))
}
