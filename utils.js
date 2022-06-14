const jwt = require("jsonwebtoken");

const createToken = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "3days" });
};

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    return jwt.verify(token, process.env.JWT_SECRET, (error, payload) => {
      if (error) {
        reject({ error: "invalid token" });
      } else {
        resolve(payload);
      }
    });
  });
};

module.exports = {
  createToken,
  verifyToken,
};
