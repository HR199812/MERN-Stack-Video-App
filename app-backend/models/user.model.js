const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
    },
    username: {
      type: String,
      require: true,
      trim: true,
    },
    phonenumber: {
      type: Number,
      require: true,
      trim: true,
    },
    password: {
      type: String,
      require: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.Model("User", userSchema);
module.exports = User;
