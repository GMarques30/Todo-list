import { Router } from 'express';
import TaskController from './src/controllers/TaskController'

const router = Router();

router.get('/task', TaskController.getAllTasks);
router.get('/task/:id', TaskController.getTaskById);
router.post('/task', TaskController.createTask);
router.put('/task/:id', TaskController.updateTask);
router.delete('/task/:id', TaskController.deleteTask);

export default router;