const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3002;
const app = express();

const MONGO_URI = process.env.MONGODB_URI || "mongodb://snvivoli:password1@ds231739.mlab.com:31739/heroku_0lz9s37f";
// const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/helmet";
const mongoose = require("mongoose");
// const MongoStore = require("connect-mongo")(session);
// const bodyParser = require('body-parser');

mongoose.connect(MONGO_URI, { useNewUrlParser: true })
.then(console.log(`MongoDB connected at ${MONGO_URI}`));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })

// app.get("/signup", (req, res) => {
//     res.sendFile(path.join(__dirname + "./public/signup.html"));
// });

// app.get("/signup2", (req, res) => {
//     res.sendFile(path.join(__dirname + "./public/signup2.html"));
// });

// app.get("/signup3", (req, res) => {
//     res.sendFile(path.join(__dirname + "./public/signup3.html"));
// });

// app.get("/signup4", (req, res) => {
//     res.sendFile(path.join(__dirname + "./public/signup4.html"));
// });

const routes = require('./routes');
app.use(routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
