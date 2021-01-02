const express = require("express")
const morgan = require("morgan")
const client = require("./db")
const postList = require("./views/postList")
const postDetails = require("./views/postDetails")
const addPost = require("./views/addPost")

const app = express()

// parses url-encoded bodies
app.use(express.urlencoded({ extended: false }))

// parses json bodies
app.use(express.json())

app.use(morgan("dev"))
app.use(express.static(__dirname + "/public"))

app.use("/posts", require("./routes/posts"))
// app.use("/add", require("./routes/posts"))

app.get("/", (req, res, next) => {
  res.redirect("/posts")
})

const PORT = 1337

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`)
})
