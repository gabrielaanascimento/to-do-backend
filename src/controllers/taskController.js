import TaskService from '../services/taskService.js';

class TaskController {
    async createTask(req, res) {
        try {
            const task = await TaskService.createTask(req.body);
            res.status(201).json(task);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create task' });
        }
    }

    async getTasksByUserId(req, res) {
        try {
            const tasks = await TaskService.getTasksByUserId(req.params.userId);
            res.status(200).json(tasks);
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve tasks' });
        }
    }

    async updateTask(req, res) {
        try {
            const id = Number(req.params.id);
            const task = await TaskService.updateTask(id, req.body);
            res.status(200).json(task);
        } catch (error) {
            res.status(500).json({ error: 'Failed to update task' });
        }
    }

    async deleteTask(req, res) {
        try {
            const id = Number(req.params.id);
            const task = await TaskService.deleteTask(id);
            res.status(200).json(task);
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete task' });
        }
    }

    async getTaskById(req, res) {
        try {
            const id = Number(req.params.id);
            const task = await TaskService.getTaskById(id);
            if (task) {
                res.status(200).json(task);
            } else {
                res.status(404).json({ error: 'Task not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve task' });
        }
    }
}
export default new TaskController();