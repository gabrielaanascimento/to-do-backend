import { prisma } from '../lib/prisma.js';

class TaskService {
    async createTask(data) {
        const task = await prisma.task.create({
            data: {
                title: data.title,
                description: data.description,
                dueDate: data.dueDate,
                tag: data.tag,
                userId: data.userId
            }
        });
        return task;
    }

    async getTasksByUserId(userId) {
        const tasks = await prisma.task.findMany({
            where: { userId }
        });
        return tasks;
    }

    async updateTask(id, data) {
        const task = await prisma.task.update({
            where: { id },
            data: {
                title: data.title,
                description: data.description,
                dueDate: data.dueDate,
                completed: data.completed
            }
        });
        return task;
    }

    async deleteTask(id) {
        const task = await prisma.task.delete({
            where: { id }
        });
        return task;
    }

    async getTaskById(id) {
        const task = await prisma.task.findUnique({
            where: { id }
        });
        return task;
    }
}

export default new TaskService();