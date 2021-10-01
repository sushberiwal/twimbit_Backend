const express = require("express");
const { createUser, loginUser } = require("../Controller/userController");

const userRouter = express.Router();

userRouter.route("/create").post(createUser);
userRouter.route("/login").post(loginUser);

module.exports = userRouter;
