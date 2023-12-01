import { ITask } from '../models/Task'
import TaskRepository from '../repositories/TaskRepository'

class TaskService {
    static getAllTasks(): Promise<ITask[]> {
        return TaskRepository.getAllTasks();
    }
}

export default TaskService;