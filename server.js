const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3002;
const app = express();

const MONGO_URI = process.env.MONGODB_URI || "mongodb://svivoli:password1@ds161640.mlab.com:61640/heroku_q379qz6c";
// const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/helmet";
const mongoose = require("mongoose");
// const MongoStore = require("connect-mongo")(session);
// const bodyParser = require('body-parser');

mongoose.connect(MONGO_URI, { useNewUrlParser: true })
.then(console.log(`MongoDB connected at ${MONGO_URI}`));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })

const routes = require('./routes');
app.use(routes);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  app.use(express.static('client/build'));

  // Express serve up index.html file if it doesn't recognize route
  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
