const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const { sendConfirmationEmail } = require("../../mailer");
const { sendResetPasswordEmail } = require("../../resetPassword");

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
      const salt = await bcrypt.genSalt(10);
      const hassPassword = await bcrypt.hash(req.body.password, salt);
      const newUser = await new User({
        username: req.body.username,
        email: req.body.email,
        password: hassPassword,
        acctiveAccount: false,
      });
      await newUser.save();
      sendConfirmationEmail({ toUser: req.body }, newUser._id);
      // console.log({ toUser: req.body }, newUser._id);
      res.status(200).json(newUser);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//[POST]: /api/auth/login
const userLogin = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (user) {
      if (user.acctiveAccount === false) {
        res.status(404).json("please active your email");
      } else if (!validPassword) {
        res.status(404).json("Wrong password");
      } else {
        const token = jwt.sign(
          {
            id: user._id,
            isAdmin: user.isAdmin,
          },
          process.env.JWT
          // {
          //   expiresIn: '30s'
          // }
        );
        const { password, isAdmin, acctiveAccount, ...others } = user._doc;
        res
          .cookie("access_token", token, {
            httpOnly: true,
          })
          .status(200)
          .json({ ...others });
      }
    } else {
      res.status(404).json("Tài khoản không tồn tại");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//[POST]: /api/auth/reset-password
const resetPassword = async (req, res, next) => {
  try {
    if (req.body.id) {
      const user = await User.findOneAndUpdate(
        { _id: req.body.id },
        { password: req.body.password }
      );
    } else {
      const user = await User.findOne({ email: req.body.email });
      sendResetPasswordEmail({ myUser: req.body }, user._id);
      // console.log({ myUser: req.body }, user._id);
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//[POST]: /api/auth/reset-password
const changePassword = async (req, res, next) => {
  const salt = await bcrypt.genSalt(10);
  const hassPassword = await bcrypt.hash(req.body.password, salt);
  try {
    if (req.body.id) {
      console.log(req.body.id);
      const user = await User.findOneAndUpdate(
        { _id: req.body.id },
        {
          password: hassPassword,
        }
      );
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createUser,
  userLogin,
  resetPassword,
  changePassword,
};
