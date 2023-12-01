import { Request, Response } from 'express';
import TaskService from '../services/TaskService';

class TaskController {
    static async getAllTasks(req: Request, res: Response): Promise<void>{
        try {
            const result = await TaskService.getAllTasks();
            res.status(200).json(result);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }
}

export default TaskController;