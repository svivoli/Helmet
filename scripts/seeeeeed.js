const mongoose = require("mongoose");
const db = require("../models");
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/helmet";

mongoose.connect(MONGO_URI, { useNewUrlParser: true })
    .then(console.log(`MongoDB connected at ${MONGO_URI}`));

const bikeSeed = [
    {
        make: "make",
        model: "model",
        year: 2019,
        estvalue: 1000
    }
];

db.Bike
    .remove({})
    .then(() => db.Bike.collection.insertMany(bikeSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

const frequencySeed = [
    {
        often: "5-10"
    }
];

db.Frequency
    .remove({})
    .then(() => db.Frequency.collection.insertMany(frequencySeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

const usesSeed = [
    {
        use: "racing",
        stolen: false,
        clubs: "los altos hills"
    }
];

db.Uses
    .remove({})
    .then(() => db.Uses.collection.insertMany(usesSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

const clientSeed = [
    {
        first: "sarah",
        last: "last",
        email: "sarah@sarah.com",
        dob_month: 'Jan',
        dob_day: 01,
        dob_year: 1990,
        zip: 97239
    }
];

db.Client
    .remove({})
    .then(() => db.Client.collection.insertMany(clientSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
