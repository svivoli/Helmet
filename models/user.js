const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    make: {type: String, required: false},
    model: {type: String, required: false},
    year: {type: String, required: false},
    estvalue: {type: Number, required: true},
    often: {type: String, required: false},
    use: {type: Array, required: false},
    stolen: {type: Boolean, required: false},
    clubs: {type: Array, required: false},
    first: {type: String, required: false},
    last: {type: String, required: false},
    email: {type: String, required: false},
    dob_month: {type: String, required: false},
    dob_day: {type: Number, required: false},
    dob_year: {type: Number, required: false},
    zip: {type: Number, required: false},
});

const User = mongoose.model("User", userSchema);

module.exports = User;