import { Request, Response } from 'express';
import TaskService from '../services/TaskService';

class TaskController {
    static async getAllTasks(req: Request, res: Response): Promise<void>{
        try {
            const result = await TaskService.getAllTasks();
            res.status(200).json(result);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Internal Server Error'});
        }
    }

    static async getTaskById(req: Request, res: Response): Promise<void>{
        try {
            const { id } = req.params;

            const result = await TaskService.getTaskById(id);
            res.status(200).json(result);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Internal Server Error'});
        }
    }

    static async createTask(req: Request, res: Response): Promise<void>{
        try {
            const { description } = req.body;

            const result = await TaskService.createTask(description);
            res.status(201).json(result);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Internal Server Error'});
        }
    }
}

export default TaskController;