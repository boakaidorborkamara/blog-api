const express = require("express");
const UserController = require("../controller/userController");
const userRouter = express.Router();

userRouter.post("/users", UserController.addUser);
userRouter.get("/users", UserController.getUsers);
userRouter.get("/users/:id", UserController.getUser);

module.exports = userRouter;