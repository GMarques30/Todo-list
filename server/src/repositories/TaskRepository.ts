import database from '../database/database'
import { ITask } from '../models/Task'

class TaskRepository {
    static getAllTasks(): Promise<ITask[]> {
        return new Promise((resolve, reject) => {
            database.query("SELECT * FROM tasks", (err, res) => {
                if(err) return reject(err);

                return resolve(res);
            })
        })
    }

    static getTaskById(id: number): Promise<ITask> {
        return new Promise<ITask>((resolve, reject) => {
            database.query("SELECT * FROM tasks WHERE id = ?", [id], (err, res) => {
                if(err) return reject(err);

                return resolve(res);
            })
        })
    }

    static createTask(description: string): Promise<ITask> {
        return new Promise((resolve, reject) => {
            database.query("INSERT INTO tasks (description) VALUES (?)", [description], (err, res) => {
                if(err) return reject(err);

                return resolve(res);
            })
        })
    }

    static deleteTask(id: number): Promise<ITask> {
        return new Promise<ITask>((resolve, reject) => {
            database.query("DELETE FROM tasks WHERE id = ?", [id], (err, res) => {
                if(err) return reject(err);

                return resolve(res);
            })
        })
    }

    static updateTask(id: number, description: string, completed: boolean): Promise<ITask> {
        return new Promise<ITask>((resolve, reject) => {
            database.query("UPDATE tasks SET description = ?, completed = ? WHERE id = ?", [description, completed, id], (err, res) => {
                if(err) return reject(err);

                return resolve(res);
            })
        })
    }
}

export default TaskRepository;