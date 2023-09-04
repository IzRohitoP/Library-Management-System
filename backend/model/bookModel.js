const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  serialno: {
    type: String,
    required: [true, "Please enter the book name"],
    unique: [true, "Please enter a unique serial no"],
  },
  name: {
    type: String,
    required: [true, "Please enter the book name"],
  },
  author: {
    type: String,
    required: [true, "Please enter the book name"],
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  dop: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Book", bookSchema);
