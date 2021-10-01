const express = require("express");
const app = express();

app.use(express.json());

// // create user , login user
// app.use("/api/user" , userRouter);

// // create post , delete post
// app.use("/api/post" , postRouter);

// // comment post , like post 
// app.use("/api/action" , actionRouter);

app.get("/" , (req ,res)=>{
    res.end("<h1>Welcome</h1>");
})

app.listen(3000 , ()=> console.log("app is listening on port 3000 !"));