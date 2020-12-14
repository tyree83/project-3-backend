const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');






/*---------- Protected Routes ----------*/
// Process the token for only the routes below
// router.use(require('../../config/auth'));
router.post('/', /*checkAuth,*/ postsCtrl.create);
router.get('/', postsCtrl.showFeed )

/*----- Helper Functions -----
I will need this in every route i want protected*/
// function checkAuth(req, res, next) {
//   if (req.user) return next();
//   return res.status(401).json({msg: 'Not Authorized'});
// }

module.exports = router;