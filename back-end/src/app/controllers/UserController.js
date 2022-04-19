const User = require("../models/User");

//get all users
//[GET]: /api/users/
const getUser = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

//update user
//[PUT]: /api/user/:id
const updateUser = async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Account has been updated.");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can only update your account.");
  }
};

//delete a user
//[DELETE]: /api/user/:id
const deleteUser = async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Your account has been deleted.");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can just delete your account!");
  }
};

//delete all users
//[DELETE]: /api/user/
const deleteAllUsers = async (req, res) => {
    try {
      const user = await User.remove();
      res.status(200).json("All account have been deleted.");
    } catch (err) {
      res.status(500).json(err);
    }
};

module.exports = {
  getUser,
  updateUser,
  deleteUser,
  deleteAllUsers
};
