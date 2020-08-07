const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bikeSchema = new Schema({
    make: {type: String, required: false},
    model: {type: String, required: false},
    year: {type: String, required: false},
    estvalue: {type: Number, required: true},
});

const Bike = mongoose.model("Bike", bikeSchema);

module.exports = Bike;