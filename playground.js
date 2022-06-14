const mongoose = require("mongoose");
const User = require("./Model/User.model");

// clear database
const clearDB = async () => {
  await User.deleteMany();
  console.log("database cleared");
};
// connect to database
const run = async () => {
  await mongoose.connect("mongodb://localhost/test");
  console.log("connected");
};

run();
