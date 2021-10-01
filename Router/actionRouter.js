const express = require("express");
const { commentPost, likePost } = require("../Controller/actionController");

const actionRouter = express.Router();

actionRouter.route("/comment").post(commentPost);
actionRouter.route("/like").post(likePost);

module.exports = actionRouter;

