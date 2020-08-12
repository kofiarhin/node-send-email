
const sendMail = require("./sendMail");


const address = "kennethhalm@gmail.com";
const subject = "this is a new subject";
const body = "this is a new body";
sendMail(address, subject, body);