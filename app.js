const express = require("express");
const actionRouter = require("./Router/actionRouter");
const postRouter = require("./Router/postRouter");
const userRouter = require("./Router/userRouter");
// const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// Bodyparser middleware
// app.use(
//     bodyParser.urlencoded({
//       extended: false
//     })
//   );
//   app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

// // create user , login user
app.use("/api/user" , userRouter);

// // create post , getallposts , getpost
app.use("/api/post" , postRouter);

// // comment post , like post , 
app.use("/api/action" , actionRouter);

// app.get("/" , (req ,res)=>{
//     res.end("<h1>Welcome</h1>");
// })
let port = process.env.PORT || 3000;
app.listen(port , ()=> console.log("app is listening on port 3000 !"));