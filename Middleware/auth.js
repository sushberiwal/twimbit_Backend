const jwt = require("jsonwebtoken");
const userModel = require("../Model/userModel");

async function protect(req, res, next) {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return res.json({
      message: "Not Authorized to access this route",
      statusCode: 401,
    });
  }
  try {
    const decoded = jwt.verify(token, "12asga3gasdg45gsdg67asga89");
    const user = await userModel.findById(decoded.id);
    if (!user) {
        return res.json({ message: "No user found with this id", statusCode: 404 });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(404).json({ message: "Not authorized to access this route"});
  }
};

module.exports.protect = protect;
