const Task = require('../models/Task.js');

// create task
exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    console.log('req.user._id:', req.user._id);
    const newTask = new Task({
      ...req.body,
      user_id: req.user._id,
    });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create task' });
  }
};

// get all tasks
exports.getTask = async (req, res) => {
  try {
    const tasks = await Task.find({ user_id: req.user._id });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
};

// get tasks by id
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      user_id: req.user._id,
    });
    if (!task) return res.status(404).json({ error: 'Task not found ' });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch task' });
  }
};

// update task
exports.updateTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user_id: req.user._id },
      { title, description, status },
      { new: true }
    );
    if (!task) return res.status(404).json({ error: 'Task not found ' });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task' });
  }
};

// delete task
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      user_id: req.user._id,
    });
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.status(200).json({ message: 'Task deleted successfully ' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
};
