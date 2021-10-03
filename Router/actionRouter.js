const express = require("express");
const { commentPost, likePost } = require("../Controller/actionController");
const {protect} = require("../Middleware/auth");
const actionRouter = express.Router();


actionRouter.route("/comment").post(protect , commentPost);
actionRouter.route("/like").post(protect , likePost);

module.exports = actionRouter;
