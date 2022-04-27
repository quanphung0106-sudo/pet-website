const User = require("../models/User");
const passport = require("passport");
const CLIENT_URL = "http://localhost:3000/";
const { sendConfirmationEmail } = require("../../mailer");
// const nodemailer = require("nodemailer");

//[POST]: /api/auth/register
const createUser = async (req, res) => {
  try {
    const newUser = await new User({
      username: req.body.username,
      // displayName: req.body.displayName,
      email: req.body.email,
      password: req.body.password,
      // photos: req.body.photos[0].value,
      // googleId: req.body.id,
    });
    sendConfirmationEmail({ toUser: req.body });
    const user = await newUser.save();
    console.log({ toUser: req.body });
    res.status(200).json("Check your email");
  } catch (err) {
    res.status(500).json(err);
  }
};

const acctiveAccount = async (req, res) => {
  res.redirect('http://localhost:3000/alert-success');
};

//[POST]: /api/auth/login
const userLogin = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(404).json("User not found!");

    const validPassword = await User.findOne({ password: req.body.password });
    !validPassword && res.status(404).json("Wrong password");

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

const loginByGoogle = passport.authenticate("google", { scope: ["profile"] });

const callbackGoogle = passport.authenticate("google", {
  successRedirect: CLIENT_URL,
  failureRedirect: "/login/failured",
});

const loginFailured = (req, res) => {
  res.status(401).json({
    success: false,
    message: "Failure",
  });
};

const loginSuccess = (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "Successfully",
      user: req.user,
    });
  }
};

const logout = (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
};

module.exports = {
  createUser,
  userLogin,
  loginByGoogle,
  callbackGoogle,
  loginFailured,
  loginSuccess,
  logout,
  acctiveAccount,
};
