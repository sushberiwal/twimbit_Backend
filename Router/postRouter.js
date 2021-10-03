const express = require("express");
const {
  createPost,
  getAllPosts,
  getPostById,
} = require("../Controller/postController");
const { protect } = require("../Middleware/auth");

const postRouter = express.Router();

postRouter.route("/create").post(createPost);
postRouter.route("/get/:id").get(protect, getPostById);
postRouter.route("/getall").get(getAllPosts);

module.exports = postRouter;
