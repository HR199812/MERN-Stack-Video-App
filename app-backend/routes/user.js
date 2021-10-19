const router = require("express").router;
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  User.find()
    .then((res) => res.status(200).json(res))
    .catch((err) => res.status(400).json(err));
});
router.get("/:emailorusername", (req, res) => {
  User.findOne({ email: req.params.userid })
    .then((res) => res.status(200).json(res))
    .catch((err) => res.status(400).json(err));
});

router.post("/add", (req, res) => {
  var user = new User({
    name: req.body.name,
    email: req.body.email,
    phonenumber: req.body.phonenumber,
    username: req.body.username,
    password: req.body.password,
  });

  User.findOne({ email: req.body.email }, (err, res) => {
    if (res) res.send({ message: "User Name Already Exists" });
    else {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
          if (err) console.log(err);
          user.password = hash;
          user.save().then(user=>{
            res.status(200).json('New Customer added successfully');
          }).catch(err=>{
            res.status(400).json('Error adding New Customer');
          })
        });
      });
    }
  });
});
