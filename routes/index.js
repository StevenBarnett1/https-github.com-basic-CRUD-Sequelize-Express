const express = require("express")
const router = express.Router()

//instead of app.get, now we use router.get

//since this is the index.js file inside of the routes directory, ./ will be localhost:3000/index
//** ^ That is assuming you app.use("/index",indexRouter) in the main app */
router.get("/",(req,res)=> {
    res.send("Index Page")
})

router.get("/about",(req,res)=> {
    res.send("Index About Page")
})

router.post("/",(req,res)=> {
    //if you make a post request to /index, this will activate
})

//route parameters are when you include a : in the route
router.get("/users/:id",(req,res)=> {
    //whatever is entered as the value for :id in the url path will be stored in req.params
    //the route parameter has the be the same name as the key you're searching for
    //cant write /users/:teamName because it will set teamName = value you type, not id
})
module.exports = router
