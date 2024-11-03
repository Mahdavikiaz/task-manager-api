const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware.js');
const taskController = require('../controllers/taskController.js');

router.post('/tasks', auth, taskController.createTask);
router.get('/tasks', auth, taskController.getTask);
router.get('/tasks/:id', auth, taskController.getTaskById);
router.put('/tasks/:id', auth, taskController.updateTask);
router.delete('/tasks/:id', auth, taskController.deleteTask);

module.exports = router;
