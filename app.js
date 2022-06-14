const sendMail = require("./mailer");
const dotenv = require("dotenv").config();
const express = require("express");
const { createToken, verifyToken } = require("./utils");
const mongoose = require("mongoose");
const User = require("./Model/User.model");

// clear database

// connect to database
mongoose.connect("mongodb://localhost/test", async () => {
  console.log("connected to database");
});

const app = express();

const clearDB = async () => {
  await User.deleteMany();
  console.log("database cleared");
};

// get users
const getUsers = async () => {
  const users = await User.find();
  console.log(users);
};

// setup middleware
app.use(express.json());

const port = process.env.PORT || 5000;

app.post("/api/user/register", async (req, res) => {
  const { name, email, password } = req.body;
  // const address = "alhassantansu@gmail.com";
  const subject = "Verify your email address escowear";
  const body = `http://localhost:5000/api/verify/${createToken(email)}`;

  try {
    const user = new User({
      name,
      email,
      password,
    });

    await user.save();
    await sendMail(email, subject, body);
    res.status(200).json({ success: "true", message: body });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  // sendMail(email, subject, body)
  //   .then((response) => res.json({ message: body }))
  //   .catch((error) => res.json({ message: "error" }));
});

app.get("/api/verify/:token", async (req, res) => {
  const { token } = req.params;

  try {
    const payload = await verifyToken(token);
    const { email } = payload;
    const user = await User.findOne({ email });

    user.verified = true;
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: "invalid token" });
  }
});

app.get("/api/user/:email", async (req, res) => {
  const { email } = req.params;
  const user = await User.find({ email });

  if (user) {
    return res.status(200).json(user);
  } else {
    return res.status(400).json({ error: "user not found" });
  }
});
app.listen(port, () => console.log("listening on " + port));
