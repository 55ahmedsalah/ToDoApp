const express = require('express');

const router = express.Router();

const Task = require('../models/task');

router.post('', (req, res, next) => {
  const task = new Task({
    content: req.body.content
  });
  task.save()
    .then(createdTask => {
      res.status(201).json({
        message: 'Task Added Succssfully!',
        taskId: createdTask._id
      });
    });
});

router.get('', (req, res, next) => {
  Task.find()
    .then(documents => {
      res.status(200).json({
        message: 'Tasks fetched successfully',
        tasks: documents
      });
    });
});

router.delete('/:id', (req, res, next) => {
  Task.deleteOne({ _id: req.params.id })
    .then(result => {
      res.status(200).json({ message: 'Post Deleted' });
    });
});

module.exports = router;