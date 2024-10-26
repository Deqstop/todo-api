const express = require('express');
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Ruta para crear una nueva tarea
router.post('/', authMiddleware, createTask);

// Ruta para obtener todas las tareas
router.get('/', authMiddleware, getTasks);

// Ruta para actualizar una tarea específica
router.put('/:id', authMiddleware, updateTask);

// Ruta para eliminar una tarea específica
router.delete('/:id', authMiddleware, deleteTask);

module.exports = router;
