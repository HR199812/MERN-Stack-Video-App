const router = require("express").Router();
const OTP = require("../models/otp.model");
const User = require("../models/user.model");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");

router.post("/sendotp", (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      let otpCode = Math.floor(Math.random() * 1000000 + 1);
      let otpData = new OTP({
        Email: user.email,
        Code: otpCode,
        ExpireIn: new Date().getTime() + 300 * 1000,
      });

      otpData
        .save()
        .then((data) => {
          console.log("Check");
          // sendMail(otpData);
          res.status(200).json("OTP send to Mail! Please Check your E-Mail");
        })
        .catch((err) => {
          res.status(400).send("Server Down");
        });
    } else {
      res.send({ message: "Email Does Not Exist" });
    }
  });
});
module.exports = router;
