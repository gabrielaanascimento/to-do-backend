import TaskController from '../controllers/taskController.js';
import { Router } from 'express';

const taskRoutes = Router();

taskRoutes.post('/register', TaskController.createTask);
taskRoutes.get('/user/:userId', TaskController.getTasksByUserId);
taskRoutes.put('/update/:id', TaskController.updateTask);
taskRoutes.delete('/delete/:id', TaskController.deleteTask);
taskRoutes.get('/get/:id', TaskController.getTasksByUserId);

export default taskRoutes;