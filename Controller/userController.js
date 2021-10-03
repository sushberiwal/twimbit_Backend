const userModel = require("../Model/userModel");

async function createUser(req, res, next) {
  const { name, username, email, password } = req.body;
  try {
    const user = await userModel.create({ name, username, email, password });
    sendToken(user, 201, res);
    // res.status(201).json({
    //   success: true,
    //   user,
    // });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create user",
      error: error.message,
    });
  }
}

async function loginUser(req, res, next) {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(404).json({
      message: "Please provide username and password",
    });
  }
  try {
    let user = await userModel.findOne({ email }).select("+password");
    // console.log(user);
    if (!user) {
      res.status(404).json({
        message: "Login failed",
        error: "Invalid credentials",
      });
    }
    const isMatch = await user.matchPasswords(password);
    console.log(isMatch);
    if (!isMatch) {
      res.status(404).json({
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
    res.json(500).json({
      message: "Login Failed",
      error: error.message,
    });
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
