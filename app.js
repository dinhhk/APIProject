const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/apiproject');

const app = express();



// Middlewares
app.use(logger('dev'));

// Routes
const users = require('./routes/users');
app.use('/users', users);

// Catch 404
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
})

// Error handler function
app.use((err, req, res, next) => {
  const error = app.get('env') == 'development' ? err : {};
  const status = err.status || 500;
  if(error) {
    // Response to client
    res.status(status).json({
      'error': {
        'message': err.message
      }
    });

    // Response to ourselves
    console.error(err);
  }
})

// Start the server
const port = app.get('port') || 3000;
app.listen(port, () => {
  console.log(`Server is listining on port ${port}`);
})
