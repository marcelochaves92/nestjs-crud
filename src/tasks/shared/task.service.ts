import { Task } from './task';
import { Injectable } from "@nestjs/common";

@Injectable()
export class TaskService {
    tasks: Task[] = [
        {
            id: 1,
            description: "Description of task 1",
            completed: false,
        },
        {
            id: 2,
            description: "Description of task 2",
            completed: true,
        },
        {
            id: 3,
            description: "Description of task 3",
            completed: false,
        },
        {
            id: 4,
            description: "Description of task 4",
            completed: true,
        },
        {
            id: 5,
            description: "Description of task 5",
            completed: false,
        }
    ];

    getAll() {
        return this.tasks;
    }

    getById(id: number) {
        return this.tasks.find((value) => value.id == id);
    }

    create(task: Task) {
        let lastId = 0;
        if (this.tasks.length > 0) {
            lastId = this.tasks[this.tasks.length - 1].id;
        }
        task.id = lastId + 1;
        this.tasks.push(task);

        return task;
    }

    update(task: Task) {
        const taskArray = this.getById(task.id);
        if (taskArray) {
            taskArray.description = task.description;
            taskArray.completed = task.completed;
        }
        return taskArray;
    }

    delete(id: number) {
        const index = this.tasks.findIndex((value) => value.id == id);
        this.tasks.splice(index, 1);
    }

}