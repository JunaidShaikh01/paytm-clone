const mongoose = require("mongoose");
require("dotenv").config();
const { string, Schema, number } = require("zod");
const mongoUrl = process.env.mongo_url;
mongoose.connect(mongoUrl);

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    
  },
  firstname: {
    type: String,
    required: true,
    trim: true,
   
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
   
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 8,
  },
});

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  balence: {
    type: Number,
    require: true,
  },
});

const User = mongoose.model("user", UserSchema);
const Account = mongoose.model("Account", accountSchema);

module.exports = {
  User,
  Account,
};
