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
          sendMail(otpData);
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

const sendMail = async (mailData) => {
  console.log(mailData);
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  const mins = Math.floor(mailData.ExpireIn / 1000);
  // var mins = moment.duration(x, 'milliseconds');
  // moment(mins.asMinutes(), 'mm').format('mm:ss');

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "hritwik72@gmail.com", // sender address
    to: `${mailData.Email}`, // list of receivers
    subject: "Reset Password", // Subject line
    text: `Hi ${mailData.Email},
        \nYour OTP to reset your password is: ${mailData.Code}.\n
        Expiring in: 5 mins`, // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};
module.exports = router;
