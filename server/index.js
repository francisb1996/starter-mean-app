var express = require("express")
var app = express()

var UserService = require('./services/UserService')

app.listen(3000, () => {
  console.log("Server running on port 3000");
})

app.get("/", (req, res) => {
  res.json("Hello world!");
})

app.get("/users", (req, res) => {
  res.json(UserService.getUsers()).status(200)
})

app.post("/users", (req, res) => {
  UserService.addUser(req.body)
  res.status(201)
})