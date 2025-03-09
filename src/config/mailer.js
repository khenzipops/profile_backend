const nodeMailer = require("nodemailer");

//load environment variables from .env file
require("dotenv").config();

const transporter = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

module.exports = transporter;
