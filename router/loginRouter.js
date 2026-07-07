const express = require("express");
const loginController = require("../controller/loginController");
const loginRouter = express.Router();

console.log("login router")
loginRouter.post("/login", loginController.logIn);


module.exports = loginRouter;