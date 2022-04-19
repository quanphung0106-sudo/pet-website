const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    max: 30,
    unique: true,
  },
  email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
  },
  password: {
      type: String, 
      required: true,
  },
},
{
    timestamps: true,
});

module.exports = mongoose.model('User', UserSchema);