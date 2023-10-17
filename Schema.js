const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true, index: true },
    email: { type: String, unique: true, required: true, index: true },
    password: { type: String, required: true },
  });
  

const user = mongoose.model('user', userSchema);
module.exports = user
