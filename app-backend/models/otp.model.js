const mongoose = require("mongoose");
const schema = mongoose.Schema;

const otpSchema = new schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
    },
    code: {
      type: String,
      required: true,
      trim: true,
    },
    expireIn: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Otp = mongoose.model("Otp", otpSchema);

module.exports = Otp;