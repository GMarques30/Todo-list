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

    static deleteTask(id: string): Promise<ITask> {
        return TaskRepository.deleteTask(id);
    }

    static updateTask(id: string, description: string, completed: string) {
        return TaskRepository.updateTask(id, description, completed);
    }
}

export default TaskService;