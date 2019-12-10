const User = require('../models/user.model.js');

// Create and Save a new User
exports.create = (req, res) => {
  // Create a new User
  const user = new User({
    location: req.body.location,
    personsInHouse: req.body.personsInHouse,
    houseSize: req.body.houseSize,
  });

  // Save User in the database
  user
    .save()
    .then(data => {
      // we wait for insertion to be complete and we send the newly user integrated
      res.send(data);
    })
    .catch(err => {
      // In case of error during insertion of a new user in database we send an
      // appropriate message
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the User.'
      });
    });
};

// Retrieve and return all Users from the database.
exports.findAll = (req, res) => {
  User.find()
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      });
    });
};

// Find a single User with a UserId
exports.findOne = (req, res) => {
  User.findById(req.params.userId)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.userId
        });
      }
      res.send(user);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.userId
        });
      }
      return res.status(500).send({
        message: 'Error retrieving user with id ' + req.params.userId
      });
    });
};

// Update a User identified by the UserId in the request
exports.update = (req, res) => {

  // Find user and update it with the request body
  User.findByIdAndUpdate(
    req.params.userId,
    {
      title: req.body.location,
      content: req.body.personsInHouse,
    },
    { new: true }
  )
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.userId
        });
      }
      res.send(user);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.userId
        });
      }
      return res.status(500).send({
        message: 'Error updating user with id ' + req.params.userId
      });
    });
};

// Delete a User with the specified UserId in the request
exports.delete = (req, res) => {
  User.findByIdAndRemove(req.params.userId)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.userId
        });
      }
      res.send({ message: 'User deleted successfully!' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.userId
        });
      }
      return res.status(500).send({
        message: 'Could not delete user with id ' + req.params.userId
      });
    });
};


//Sarah ajout de code

exports.findHouseSize = (req, res) => {
  User.find({ houseSize: req.params.houseSize })
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      });
    });
};


exports.findCountry = (req, res) => {
  User.aggregate([

    {
      $group:
      {
        _id: '$location',
        sum: { $sum: '$personsInHouse' },
        
      }      
    }

  ]).
    then(function (result) {
      res.json(result)
    });
};
