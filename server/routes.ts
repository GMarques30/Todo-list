import { Router } from 'express';
import TaskController from './src/controllers/TaskController'

const router = Router();

router.get('/task', TaskController.getAllTasks);
router.get('/task/:id');
router.post('/task');
router.put('/task/:id');
router.delete('/task/:id');

export default router;