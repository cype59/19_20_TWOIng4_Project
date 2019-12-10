const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    location: String,
    personsInHouse: Number,
    houseSize: String,
  },{
   
    versionKey: false, // You should be aware of the outcome after set to false
    //collection: "User"
});

module.exports = mongoose.model('User', userSchema);