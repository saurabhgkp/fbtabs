const mongoose = require("mongoose");

const users = mongoose.Schema({
  name: String,
  email: String,
  password: String,

  isActive: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var User = mongoose.model("User", users);

module.exports = User;
