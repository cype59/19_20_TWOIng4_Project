const Measure = require('../models/measure.model.js');

// Create and Save a new User
exports.create = (req, res) => {
  // Create a new User
  const measure = new Measure({
    creationDate: req.body.creationDate,
    sensorId: req.body.sensorId,
    value: req.body.value,
  });

  // Save Measure in the database
  measure
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
  Measure.find()
    .then(measures => {
      res.send(measures);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      });
    });
};

// Find a single Measure with a MeasureId
exports.findOne = (req, res) => {
  Measure.findById(req.params.measureId)
    .then(measure => {
      if (!measure) {
        return res.status(404).send({
          message: 'Measure not found with id ' + req.params.measureId
        });
      }
      res.send(measure);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Measure not found with id ' + req.params.measureId
        });
      }
      return res.status(500).send({
        message: 'Error retrieving user with id ' + req.params.measureId
      });
    });
};

// Find a single Measure with a type
exports.findType = (req, res) => {
  Measure.find({type:req.params.type})
    .then(measure => {
      if (!measure) {
        return res.status(404).send({
          message: 'Measure not found with type ' + req.params.type
        });
      }
      res.send(measure);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Measure not found with type ' + req.params.type
        });
      }
      return res.status(500).send({
        message: 'Error retrieving user with type ' + req.params.type
      });
    });
};

// Find a single Measure with a type
exports.findCreation = (req, res) => {
  Measure.find({creationDate: { $gte: req.params.creationDate }})
    .then(measure => {
      if (!measure) {
        return res.status(404).send({
          message: 'Measure not found with type ' + req.params.creationDate
        });
      }
      res.send(measure);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Measure not found with type ' + req.params.creationDate
        });
      }
      return res.status(500).send({
        message: 'Error retrieving user with type ' + req.params.creationDate
      });
    });
};

// Update a Measure identified by the MeasureId in the request
exports.update = (req, res) => {

  // Find measure and update it with the request body
  Measure.findByIdAndUpdate(
    req.params.measureId,
    {
        creationDate: req.body.creationDate,
        sensorId: req.body.sensorId,
        value: req.body.value,
    },
    { new: true }
  )
    .then(measure => {
      if (!measure) {
        return res.status(404).send({
          message: 'Measure not found with id ' + req.params.measureId
        });
      }
      res.send(measure);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Measure not found with id ' + req.params.measureId
        });
      }
      return res.status(500).send({
        message: 'Error updating measure with id ' + req.params.measureId
      });
    });
};

// Delete a Measure with the specified MeasureId in the request
exports.delete = (req, res) => {
  Measure.findByIdAndRemove(req.params.measureId)
    .then(measure => {
      if (!measure) {
        return res.status(404).send({
          message: 'Measure not found with id ' + req.params.measureId
        });
      }
      res.send({ message: 'Measure deleted successfully!' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Measure not found with id ' + req.params.measureId
        });
      }
      return res.status(500).send({
        message: 'Could not delete measure with id ' + req.params.measureId
      });
    });
};

exports.findAvg = (req, res) => {
  Measure.aggregate([
    {
      $group:
      {
        _id:'$type',
        avg:{$avg:'$value'}
      }
    }
  ]).then(function(result){
    res.json(result)
  });
};

exports.findType = (req, res) => {
  Measure.find({ type: req.params.type })
    .then(sensors => {
      res.send(sensors);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      });
    });
};

