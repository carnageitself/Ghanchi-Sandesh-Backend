const asyncHandler =require("./asyncHandler,.js");
const ErrorHandler =require("../utils/Errorhandler.js");
const jwt =require("jsonwebtoken");
const User =require("../models/UserModel.js");

const isAuthenticatedUser = asyncHandler(async (req, res, next) => {
  const { token } = req.cookies;

  console.log(token);

  if (!token) {
    return next(
      new ErrorHandler("Pleaser login to access this resources", 401)
    );
  }

  const decodeData = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await User.findById(decodeData.id);

  next();
});

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
    return next(new ErrorHandler(`Role:${req.user.role} is not allowed to access this routes`,403));
      }
      next();
      
    };
};

module.exports={isAuthenticatedUser,authorizeRoles};