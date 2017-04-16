const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  'firstName': { type: String },
  'lastName': { type: String },
  'email': { type: String },
  'cars': [{
    type: Schema.Type.ObjectId,
    ref: 'car'
  }]
});

const User = mongoose.model('user', userSchema);
module.exports = User;
