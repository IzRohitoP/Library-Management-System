const mongoose = require("mongoose");

exports.connectDB = async (url) => {
  try {
    mongoose.connect(url);
    console.log("Database connected..");
  } catch (error) {
    console.log(error);
  }
};
