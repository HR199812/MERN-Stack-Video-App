const mongoose = require("mongoose");
const schema = mongoose.Schema;

const otpSchema = new schema(
  {
    Email: {
      type: String,
      required: true,
      trim: true,
    },
    Code: {
      type: String,
      required: true,
      trim: true,
    },
    ExpireIn: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Otp = mongoose.model("Otp", otpSchema);

module.exports = Otp;