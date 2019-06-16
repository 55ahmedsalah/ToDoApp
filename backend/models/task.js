const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  content: { type: String, required: true },
  userId: { type: String, required: true }
});

module.exports = mongoose.model('Task', taskSchema);