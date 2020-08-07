const mongoose = require("mongoose");
const db = require("../models");
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/helmet";

mongoose.connect(MONGO_URI, { useNewUrlParser: true })
    .then(console.log(`MongoDB connected at ${MONGO_URI}`));

const userSeed = [
    {
        make: "make",
        model: "model",
        year: 2019,
        estvalue: 1000,
        often: "5-10",
        use: "racing",
        stolen: false,
        clubs: "los altos hills",
        first: "sarah",
        last: "last",
        email: "sarah@sarah.com",
        dob_month: 'Jan',
        dob_day: 01,
        dob_year: 1990,
        zip: 97239
    }
];

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });