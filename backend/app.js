const express = require('express');
const bodyParser = require('body-parser');

const app = express();

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

app.post('/api/tasks', (req, res, next) => {
  const task = req.body;
  res.status(201).json({
    message: 'Task Added Succssfully!'
  });
});

app.get('/api/tasks', (req, res, next) => {
  const tasks = [
    { id: 1, content: 'Go to college', checked: false },
    { id: 2, content: 'Go to mall', checked: true },
    { id: 3, content: 'Go to course', checked: false }
  ];
  res.status(200).json({
    message: 'Tasks fetched successfully',
    tasks: tasks
  });
});

app.post('/api/signin', (req, res, next) => {
  const user = req.body;
  res.status(201).json({
    message: 'Successfully SignedIn',
    token: '12345'
  });
});

module.exports = app;