const express = require("express");
const { commentPost, likePost , unLikePost } = require("../Controller/actionController");
const {protect} = require("../Middleware/auth");
const actionRouter = express.Router();


actionRouter.route("/comment").post(commentPost);
actionRouter.route("/like").post(likePost);
actionRouter.route("/unlike").post(unLikePost);

module.exports = actionRouter;
