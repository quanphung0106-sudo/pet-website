const { deleteOne } = require("../models/Token");
const User = require("../models/User");
var ObjectID = require('mongodb').ObjectID;
const {
  ObjectId
} = require('mongodb');

//get all users
//[GET]: /api/users/
const getUsers = async (req, res, next) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

//update user
//[PUT]: /api/user/:id
const updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json("update user success");
  } catch (err) {
    res.status(500).json(err);
  }
};

//update cart user
//[PUT]: /api/user/cart/:id
const updateCartUser = async (req, res, next) => {
  const { productId, qty } = req.body;
  try {
    const user = await User.findOne({ _id: req.params.id });

    const isExisting = user.cart.findIndex(
      (objInItems) =>
        objInItems.productId.toString() ===
        productId,
    );

    if (isExisting >= 0) {
        user.cart.forEach((item) => {
          if (
            item.productId.toString() ===
            productId
          ) {
            item.qty += Number(qty);
          }
        });
    } else {
      user.cart.push({ productId: ObjectId(productId), qty: +qty, _id: new ObjectID() });
    }

    const data = await user.save();
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

//delete a user
//[DELETE]: /api/user/:id
const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("Your account has been deleted.");
  } catch (err) {
    res.status(500).json(err);
  }
};

//delete all users
//[DELETE]: /api/user/
const deleteAllUsers = async (req, res, next) => {
  try {
    await User.remove();
    res.status(200).json("All account have been deleted.");
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = {
  getUsers,
  updateUser,
  deleteUser,
  deleteAllUsers,
  updateCartUser
};
