const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  whoPosted: String,
  datePosted: String,
  location: String,
  textPost: String,
  img: { data: Buffer, contentType: String}
}, {
  timestamps: true
});


module.exports = mongoose.model('Post', postSchema);