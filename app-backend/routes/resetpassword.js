const router = require("express").Router();
const OTP = require('../models/otp.model');
const User = require('../models/user.model');
const nodemailer = require("nodemailer");
const bcrypt = require('bcryptjs');

module.exports = router;

