const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const frequencySchema = new Schema({
    often: {type: String, required: false},
});

const Frequency = mongoose.model("Frequency", frequencySchema);

module.exports = Frequency;