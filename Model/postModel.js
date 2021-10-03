const mongoose = require("mongoose");
const { DB_CONFIG } = require("../Config/secrets");


mongoose
  .connect(DB_CONFIG, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => {
    console.log("Connected to db !!!");
  });

let postSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  likes: {
    type: [String],
  },
  comments: {
    type: [{ username: String, comment: String }],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const postModel = mongoose.model("posts", postSchema);

module.exports = postModel;
