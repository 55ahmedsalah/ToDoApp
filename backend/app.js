const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const tasksRoutes = require('./routes/tasks')
const signinRoutes = require('./routes/user')

const User = require('./models/user');

const app = express();

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