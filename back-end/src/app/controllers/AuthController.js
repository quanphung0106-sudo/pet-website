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
      res.status(200).json(newUser);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//[POST]: /api/auth/login
const userLogin = async (req, res) => {
  // const user = await User.findOne({ username: req.body.username });
  // const check = user.acctiveAccount;
  // const username = user.username;
  // const password = user.password;
  // console.log(check, username, password);
  try {
  //   if (check === false || !username || !password) {
  //     res.status(404).json("Tài khoảng chưa xác thực hoặc không tồn tại");
  //     console.log("Tài khoảng chưa xác thực hoặc không tồn tại");
  //   } else {
  //     res.status(200).json(user);
  //     console.log(user);
  //   }

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
};
