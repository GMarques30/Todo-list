import { ITask } from '../models/Task'
import TaskRepository from '../repositories/TaskRepository'

class TaskService {
    static getAllTasks(): Promise<ITask[]> {
        return TaskRepository.getAllTasks();
    }

    static getTaskById(id: number): Promise<ITask> {
        return TaskRepository.getTaskById(id);
    }

    static createTask(description: string): Promise<ITask> {
        return TaskRepository.createTask(description);
    }

    static deleteTask(id: number): Promise<ITask> {
        return TaskRepository.deleteTask(id);
    }

    static updateTask(id: number, description: string, completed: boolean) {
        return TaskRepository.updateTask(id, description, completed);
    }
}

export default TaskService;