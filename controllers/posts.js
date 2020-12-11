  
const Score = require("../models/post");

module.exports = {
  create,
  highScores,
};

async function create(req, res) {
  console.log(req.user);
  try {
    await Post.create(req.body);
    // Use the highScores action to return the list
    highScores(req, res);
  } catch (err) {
    res.json({ err });
  }
}

async function highScores(req, res) {
  const posts = await Post.find({})
    .sort({ numGuesses: 1, seconds: 1 })
    // default to a limit of 20 high scores
    // if not specified in a query string
    .limit(req.query.limit || 20);
  res.json(posts);
}