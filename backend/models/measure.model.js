const mongoose = require('mongoose');

const measureSchema = new mongoose.Schema(
  {
    type: String,
    creationDate: String,
    sensorID:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sensor'
    },
    value: Number,
  },{
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports = mongoose.model('Measure', measureSchema);