const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();


require('dotenv').config();

require('./config/database');

const postsRouter = require('./routes/api/posts');
const usersRouter = require('./routes/api/users');



app.use(logger('dev'));
app.use(express.json());
app.use(cors());


app.use('/api/posts', postsRouter);
app.use('/api/users', usersRouter);


const port = process.env.PORT || 3001;	
app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});