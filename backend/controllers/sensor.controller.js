const Sensor = require('../models/sensor.model.js');

// Create and Save a new sensor
exports.create = (req, res) => {
  // Create a new sensor
  const sensor = new Sensor({
    creationDate: req.body.creationDate,
    location: req.body.location,
  });

  // Save sensor in the database
  sensor
    .save()
    .then(data => {
      // we wait for insertion to be complete and we send the newly sensor integrated
      res.send(data);
    })
    .catch(err => {
      // In case of error during insertion of a new sensor in database we send an
      // appropriate message
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the sensor.'
      });
    });
};

// Retrieve and return all sensors from the database.
exports.findAll = (req, res) => {
  Sensor.find()
    .then(sensors => {
      res.send(sensors);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving sensors.'
      });
    });
};

// Find a single sensor with a sensorId
exports.findOne = (req, res) => {
  Sensor.findById(req.params.sensorId)
    .then(sensor => {
      if (!sensor) {
        return res.status(404).send({
          message: 'sensor not found with id ' + req.params.sensorId
        });
      }
      res.send(sensor);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'sensor not found with id ' + req.params.sensorId
        });
      }
      return res.status(500).send({
        message: 'Error retrieving sensor with id ' + req.params.sensorId
      });
    });
};

// Update a sensor identified by the sensorId in the request
exports.update = (req, res) => {

  // Find sensor and update it with the request body
  Sensor.findByIdAndUpdate(
    req.params.sensorId,
    {
        creationDate: req.body.creationDate,
        location: req.body.location,
    },
    { new: true }
  )
    .then(sensor => {
      if (!sensor) {
        return res.status(404).send({
          message: 'sensor not found with id ' + req.params.sensorId
        });
      }
      res.send(sensor);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'sensor not found with id ' + req.params.sensorId
        });
      }
      return res.status(500).send({
        message: 'Error updating sensor with id ' + req.params.sensorId
      });
    });
};

// Delete a sensor with the specified sensorId in the request
exports.delete = (req, res) => {
  Sensor.findByIdAndRemove(req.params.sensorId)
    .then(sensor => {
      if (!sensor) {
        return res.status(404).send({
          message: 'sensor not found with id ' + req.params.sensorId
        });
      }
      res.send({ message: 'sensor deleted successfully!' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'sensor not found with id ' + req.params.sensorId
        });
      }
      return res.status(500).send({
        message: 'Could not delete sensor with id ' + req.params.sensorId
      });
    });
};


//AJout sarah
exports.findSensorType = (req, res) => {
  Sensor.find({location: req.params.location})
    .then(sensors => {
      res.send(sensors);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving sensors.'
      });
    });
};


  exports.findSensorUserID = (req, res) => {
    Sensor.find({ location: "bedroom" })
    .populate("userID")
    .exec(function (err, stories) {
      if (err) return handleError(err);
      console.log('The userID are an array: ', stories);
    }).then(function(result){
      res.json(result)
    });
  };

  
  

