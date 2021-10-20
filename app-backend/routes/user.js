const router = require("express").Router();
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  User.find()
    .then((res) => res.status(200).json(res))
    .catch((err) => res.status(400).json(err));
});
router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        bcrypt.compare(req.body.password, user.password).then((isMatch) => {
          if (!isMatch) return res.json("Invalid Credentials");
          jwt.sign({ id: user._id }, process.env.jwtSecret, (err, token) => {
            if (err) throw err;
            res.json({
              token,
              user: {
                id: user._id,
                username: user.name,
              },
            });
          });
        });
      } else {
        res.json("User Does not exist");
      }
    })
    .catch((err) => res.status(400).json(err));
});

router.post("/register", (req, res) => {
  var user = new User({
    name: req.body.name,
    email: req.body.email,
    phonenumber: req.body.phonenumber,
    username: req.body.username,
    password: req.body.password,
  });

  User.findOne({ email: req.body.email }, (err, querres) => {
    if (querres) res.send({ message: "EmailAlready Exists" });
    else {
      User.findOne({ username: req.body.username }, (err, querres) => {
        if (querres) res.send({ message: "Username Already Exists" });
        else {
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
              if (err) console.log(err);
              user.password = hash;
              user
                .save()
                .then((user) => {
                  res.json("Successfully Registered");
                })
                .catch((err) => {
                  res.json("Error adding New Customer");
                });
            });
          });
        }
      });
    }
  });
});

module.exports = router;
