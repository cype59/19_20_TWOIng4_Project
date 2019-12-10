const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema(
  {
    creationDate: Date,
    location: String,
    userID:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
  },{
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports = mongoose.model('Sensor', sensorSchema);