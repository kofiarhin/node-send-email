var nodemailer = require('nodemailer');


function sendMail(address, subject, body) {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'kofiarhin69@gmail.com',
            pass: 'Illmatic69'
        }
    });

    var mailOptions = {
        from: 'kofiarhin69@gmail.com',
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