const express = require("express");
const { createPost, deletePost } = require("../Controller/postController");

const postRouter = express.Router();

postRouter.route("/create").post(createPost);
postRouter.route("/delete").post(deletePost);

module.exports = postRouter;
