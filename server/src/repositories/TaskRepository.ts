import database from '../database/database'
import { ITask } from '../models/Task'

class TaskRepository {
    static getAllTasks(): Promise<ITask[]> {
        return new Promise((resolve, reject) => {
            database.query("SELECT * FROM tasks", (err, res) => {
                if (err) return reject(err);

                return resolve(res);
            })
        })
    }
}

export default TaskRepository;