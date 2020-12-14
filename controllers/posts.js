  
const Post = require("../models/post");

module.exports = {
  create,
  showFeed
};

async function create(req, res) {
  console.log(req.user)
  try {
    await Post.create(req.body);
    showFeed(req, res);
  } catch (err) {
    res.json({ err });
  }
}

async function showFeed(req,res){
  const feed = await Post.find({})
  // console.log(feed)
  res.json(feed)
}