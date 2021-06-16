const express = require("express")
const router = express.Router()
const usersController = require("../controllers/usersController")
router.use(express.urlencoded({ extended: true }));


router.get("/createUser",usersController.createUserGet)
router.post("/createUser",usersController.createUserPost)
router.post("/:id",usersController.deleteUser)
router.get("/:id",usersController.getUserId)
router.get("/",usersController.getIndex)

module.exports = router
