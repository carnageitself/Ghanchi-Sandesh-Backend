const {
    registerUser,
    updateYourProfile,
    loginUser,
    // logout,
    getMe,
    // updatePassword,
    // forgotPassword,
    // ResetPassword,
    // getAllUsers,
    // getUsersById,
    // deleteUserProfile,
    // adminUpdateUserProfile,
  } =require("../controllers/UserController.js");
  
  const  express =require("express");
  const   { authorizeRoles,isAuthenticatedUser } =require('../middleware/auth.js');
  const router = express.Router();
  router.route("/register").post(registerUser);
  router.route("/login").post(loginUser);
//   router.route("/password/forgot").post(forgotPassword);
//   router.route("/password/reset/:token").put(ResetPassword);
  router.route('/me').get(isAuthenticatedUser,getMe);
  router.route("/upd/profile").put(isAuthenticatedUser, updateYourProfile);
  // router.route("/profile").put(isAuthenticatedUser, getUserProfile);
//   router.route("/upd/pass").put(isAuthenticatedUser, updatePassword);
//   router.route('/logout').get(logout);
  
  // Admin Routes
    

  const userRoutes=router;
  module.exports=userRoutes;