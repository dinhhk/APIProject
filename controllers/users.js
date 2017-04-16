const User = require('../models/user');

module.exports = {
  index: (req, res, next) => {
    User.find({}, (err, user) => {
      if(err) {
        next(err);
      }
      res.status(200).json(user);
    });
  },
  newUser: (req, res, next) => {
    const newUser = new User(req.body);
    newUser.save((err, user) => {
      if(err) {
        next(err);
      }
      res.status(201).json(user);
    })
  }
}
