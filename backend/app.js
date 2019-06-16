const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const tasksRoutes = require('./routes/tasks')
const signinRoutes = require('./routes/user')

const app = express();

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  }
  else {
    next();
  }
};

app.use(allowCrossDomain);

app.use(express.static(__dirname + '/static'));

app.get('*', function(req,res) {
  res.sendFile(path.join(__dirname + '/static/index.html'));
});

mongoose.connect('mongodb+srv://ahmed:msgpu2xHVBylyqV0@cluster0-stl5s.mongodb.net/to-do-app?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true })
  .then(() => {
    console.log('Connected to DB!')
  })
  .catch(() => {
    console.log('Error Connecting to DB!')
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.use('/api/tasks', tasksRoutes);
app.use('/api/signin', signinRoutes);

module.exports = app;