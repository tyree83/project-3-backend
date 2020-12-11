const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  textPost: String,
  numGuesses: Number,
  seconds: Number
}, {
  timestamps: true
});

// Here's an example of Mongoose Middleware
// Ensure that initials are uppercase & not longer than 3 characters
postSchema.pre('save', function (next) {
  this.initials = this.initials.substr(0, 3).toUpperCase();
  next();
});

module.exports = mongoose.model('Post', postSchema);