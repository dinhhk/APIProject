const express = require('express');
const logger = require('morgan');
const app = express();

// Middlewares
app.use(logger('dev'));

// Routes
app.get('/', (req, res, err) => {
  res.status(200).json({
    'message': 'You requested index page'
  })
})

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
