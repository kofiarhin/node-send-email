var nodemailer = require('nodemailer');
const config = require("config");


function sendMail(address, subject, body) {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: config.email,
            pass: config.password
        }
    });

    var mailOptions = {
        from: config.email,
        to: address,
        subject: subject,
        text: body
        // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'        
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}


module.exports = sendMail;