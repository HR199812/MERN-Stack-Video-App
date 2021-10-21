const router = require("express").Router();
const OTP = require("../models/otp.model");
const User = require("../models/user.model");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");

router.get("/getOTP", (req, res) => {
  try {
    console.log(req.headers.otp);

    const dataOfOTP = OTP.find({
      $and: [
        {
          email: req.headers.email,
        },
        {
          code: req.headers.otp,
        },
      ],
    }).then((otp) => {
      const currTime = new Date().getTime();
      const otpTime = otp[0].expireIn;
      const timeDiff = otpTime - currTime;

      if (timeDiff > 0) {
        flag = false;
        User.findOne({ email: otp[0].email })
          .then((user) => {
            user.name = user.name;
            user.email = user.email;
            user.phonenumber = user.phonenumber;
            user.password = req.headers.password;
            user.username = user.username;

            //Create Salt and Hash
            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(user.userPassword, salt, (err, hash) => {
                if (err) console.log(err);
                user.userPassword = hash;

                user
                  .save()
                  .then(() => res.json("Password Updated Succesfully!"))
                  .catch((err) => res.status(400).json("Error: " + err));
              });
            });
          })
          .catch((err) => {
            res.status(400).json(err);
          });
      } else {
        console.log("hi");
        res.json("OTP Expired");
      }
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/sendotp", (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      let otpCode = Math.floor(Math.random() * 1000000 + 1);
      let otpData = new OTP({
        email: user.email,
        code: otpCode,
        expireIn: new Date().getTime() + 300 * 1000,
      });

      otpData
        .save()
        .then((data) => {
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
    to: `${mailData.email}`, // list of receivers
    subject: "Reset Password", // Subject line
    text: `Hi ${mailData.email},
        \nYour OTP to reset your password is: ${mailData.code}.\n
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
