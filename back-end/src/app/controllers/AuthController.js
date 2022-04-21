const User = require("../models/User");

//[POST]: /api/auth/register
const createUser = async (req, res) => {
  try {
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
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

module.exports = {
  createUser,
  userLogin,
};
