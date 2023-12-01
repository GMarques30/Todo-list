import { ITask } from '../models/Task'
import TaskRepository from '../repositories/TaskRepository'

class TaskService {
    static getAllTasks(): Promise<ITask[]> {
        return TaskRepository.getAllTasks();
    }

    static getTaskById(id: string): Promise<ITask> {
        return TaskRepository.getTaskById(id);
    }

    static createTask(description: string): Promise<ITask> {
        return TaskRepository.createTask(description);
    }
}

export default TaskService;