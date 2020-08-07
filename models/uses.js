const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usesSchema = new Schema({
    use: {type: Array, required: false},
    stolen: {type: Boolean, required: false},
    clubs: {type: Array, required: false},
});

const Uses = mongoose.model("Uses", usesSchema);

module.exports = Uses;