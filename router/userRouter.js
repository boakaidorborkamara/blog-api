const express = require("express");
const UserController = require("../controller/userController");
const userRouter = express.Router();

userRouter.post("/api/users", UserController.addUser);
userRouter.get("/api/users", UserController.getUsers);
userRouter.get("/api/users/:id", UserController.getUser);

module.exports = userRouter;