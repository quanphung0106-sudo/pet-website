const User = require("../models/User");
const passport = require("passport");
const CLIENT_URL = "http://localhost:3000/";
const { sendConfirmationEmail } = require("../../mailer");
// const nodemailer = require("nodemailer");

//[POST]: /api/auth/register
const createUser = async (req, res) => {
  try {
    if (req.body.id) {
      const user = await User.findOneAndUpdate(
        { _id: req.body.id },
        {
          acctiveAccount: true,
        }
      );
    } else {
      const newUser = await new User({
        username: req.body.username,
        // displayName: req.body.displayName,
        email: req.body.email,
        password: req.body.password,
        // photos: req.body.photos[0].value,
        // googleId: req.body.id,
        acctiveAccount: false,
      });
      await newUser.save();
      sendConfirmationEmail({ toUser: req.body }, newUser._id);
      console.log({ toUser: req.body }, newUser._id);
      res.status(200).json(newUser);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//[POST]: /api/auth/login
const userLogin = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (user) {
      console.log(user, user.password, req.body.password);
      if (user.acctiveAccount === false) {
        res.status(404).json("active đê");
      } else if (req.body.password !== user.password) {
        res.status(404).json("nhớ lại pass đê");
      } else {
        res.status(200).json(user);
      }
    } else {
      res.json("Tài khoản không tồn tại");
    }
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
};
