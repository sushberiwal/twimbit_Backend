const userModel = require("../Model/userModel");

async function createUser(req, res, next) {
  const { name, username, email, password } = req.body;
  // console.log(req.body);
  try {
    const user = await userModel.create({ name, username, email, password });
    sendToken(user, 201, res);
  } catch (error) {
    res.status(200).json({
      message: "Failed to create user",
      error: error.message,
    });
  }
}

async function loginUser(req, res, next) {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(200).json({
      error: "Please provide email and password",
    });
  }
  try {
    let user = await userModel.findOne({ email }).select("+password");
    // console.log(user);
    if (!user) {
      res.status(200).json({
        message: "Login failed",
        error: "Invalid credentials",
      });
    }
    const isMatch = await user.matchPasswords(password);
    console.log(isMatch);
    if (!isMatch) {
      res.status(200).json({
        message: "Login failed",
        error: "Password didn't match",
      });
    }
    sendToken(user, 200, res);
    // res.status(201).json({
    //     success: true,
    //     token:"Asfgasgasgasg",
    //     user
    //   });
  } catch (error) {
    res.status(200).json({
      message: "Login Failed",
      error: error.message,
    });
  }
}

async function getUserById(req ,res){
  try{
    let uid = req.params.id;
    console.log(uid);
    let user = await userModel.findById(uid);
    res.status(200).json(user);
  }
  catch(err){
    res.status(200).json({
      error:"Failed to get User",
      err
    })
  }
}

function sendToken(user, statusCode, res) {
  const token = user.getSignedToken();
  res.status(statusCode).json({
    success: true,
    token,
    user,
  });
}

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserById = getUserById;
