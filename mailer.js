const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

function sendMail(address, subject, body) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    var mailOptions = {
      from: process.env.EMAIL,
      to: address,
      subject: subject,
      text: body,
      // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        reject({ error: "there was a problemn sending mail" });
      } else {
        resolve({ message: "message sent" });
      }
    });
  });
}

module.exports = sendMail;
