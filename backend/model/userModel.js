const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: [true, "Please enter the user ID"],
  },
  role: {
    type: String,
    default: "user",
  },
  password: {
    type: String,
    required: [true, "Please enter the password"],
    select: false,
  },
});

// For hashing
userSchema.pre("save", async function (next) {
  // checks if password is not modified that means its already hashed but if it is modified then a non-hashede passowrd has been provided by user which we have to hash again
  if (!this.isModified("password")) {
    // checks if password not modified
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Get JWT token
userSchema.methods.getJWT = function () {
  return jwt.sign({ id: this._id }, process.env.SECRET_KEY, {
    expiresIn: process.env.TOKEN_EXPIRE,
  });
};

// Compare Password
userSchema.methods.comparePassword = function (givenPassword) {
  return bcrypt.compare(givenPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
