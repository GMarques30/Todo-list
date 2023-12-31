import { Request, Response } from 'express';
import TaskService from '../services/TaskService';
import { validateIdSchema, validateTaskSchema } from '../schemas/TaskSchema';

class TaskController {
    static async getAllTasks(req: Request, res: Response) {
        try {
            const result = await TaskService.getAllTasks();
            res.status(200).json(result);
        } catch(err) {
            console.error(err);
            res.status(500).json({error: 'Internal Server Error'});
        }
    }

    static async getTaskById(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            await validateIdSchema.validate(id);
            const result = await TaskService.getTaskById(id);
            res.status(200).json(result);
        } catch(err) {
            console.error(err);
            res.status(500).json({error: 'Internal Server Error'});
        }
    }

    static async createTask(req: Request, res: Response) {
        try {
            const description: string = req.body.description;
            await validateTaskSchema.validate(req.body);
            const result = await TaskService.createTask(description);
            res.status(201).json(result);
        } catch(err) {
            console.error(err);
            res.status(500).json({error: 'Internal Server Error'});
        }
    }

    static async deleteTask(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            await validateIdSchema.validate(id);
            const result = await TaskService.deleteTask(id);
            res.status(200).json(result);
        } catch(err) {
            console.error(err);
            res.status(500).json({error: 'Internal Server Error'});
        }
    }

    static async updateTask(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const description: string = req.body.description;
            const completed: boolean = req.body.completed;
            await validateIdSchema.validate(id);
            await validateTaskSchema.validate(req.body);
            const result = await TaskService.updateTask(id, description, completed);
            res.status(200).json(result);
        } catch(err) {
            console.error(err);
            res.status(500).json({error: 'Internal Server Error'});
        }
    }
}

export default TaskController;