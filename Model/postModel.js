const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://admin:admin123@cluster0.zd8n8.mongodb.net/twimbit", {
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
    type: [{ createdBy: String, comment: String }],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const postModel = mongoose.model("posts", postSchema);

module.exports = postModel;
