const express = require("express")
const app = express()
const port = 3000

//test lines where commit and read to database
//check other sqlite express apps
//put row in main server file and model file and read

const path = require("path")


const indexRouter = require('./routes/index')
const userRouter = require("./routes/users")


app.use("/users",userRouter)
app.use("/index",indexRouter)
app.use(express.urlencoded({extended:false}))
app.use("/public",express.static(path.join(__dirname,"static")))
app.set("views",path.join(__dirname,"views"))
app.set('view engine', 'ejs');



//curl http://localhost:3000 -o "filename" saves a file with the data to where the terminal is currently running(directory)


app.listen(port,console.log(`port is up on ${port}`))

