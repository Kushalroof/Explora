const express = require("express");
const router = express.Router({mergeParams:true});
const Users = require("../models/user.js");
const wrapAsync= require("../utils/wrapAsync.js");
const passport = require("passport");
const {saveRedirectUrl}=require("../middleware.js");
const UserController= require("../controllers/users.js");

router.route("/signup")
.get( UserController.renderSignupForm)
.post(wrapAsync(UserController.SignupUser));

router.route("/login")
.get(UserController.renderLoginForm)
.post(saveRedirectUrl,passport.authenticate("local", {failureRedirect: "/login", failureFlash:true}), UserController.LoginUser);

router.get("/logout", UserController.LogoutUser);

module.exports=router;