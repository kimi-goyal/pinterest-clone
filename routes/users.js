const mongoose = require('mongoose');
const plm= require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/users");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: String,
  posts: [ {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',}
  ],
  profileimage: String,
  dp: String,
  email: { type: String, required: true, unique: true },
  fullname: { type: String, required: true },
});

userSchema.plugin(plm);
module.exports = mongoose.model("User", userSchema);