const UserSchema = require("../models/User");

//[GET] /api/auth/register
const createUser = async (req, res) => {
  try {
    res.send("Hello bro!");
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
    createUser
}