var nodemailer = require("nodemailer");

function sendMail(address, subject, body) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
  });

  var mailOptions = {
    from: process.env.email,
    to: address,
    subject: subject,
    text: body,
    // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error.message);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports = sendMail;
