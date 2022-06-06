const sendMail = require("./sendMail");
const dotenv = require("dotenv").config();

const address = "alhassantansu@gmail.com";
const subject = "this is a new subject";
const body = "this is a new body";

try {
  sendMail(address, subject, body);
} catch (error) {
  console.log(error.message);
}
