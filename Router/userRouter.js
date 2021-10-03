const express = require("express");
const { createUser, loginUser , getUserById } = require("../Controller/userController");

const userRouter = express.Router();

userRouter.route("/create").post(createUser);
userRouter.route("/login").post(loginUser);
userRouter.route("/get/:id").get(getUserById);
module.exports = userRouter;