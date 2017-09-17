import { Injectable } from '@angular/core';
import { ITask } from '../shared/task.model';
import { Http, Response } from '@angular/http';
import { SAVED_TASKS } from '../shared/tasks';

@Injectable()

export class DataService {
    constructor () {}

    getTasks(): ITask[]  {
        return SAVED_TASKS;
    }

    getTodoTasks (allTasks: ITask[]) {
        return allTasks.map(task => {
            if (task.category === 'To Do') return task;
        }).filter(e => e);
    }

    getPlanActiveTasks (allTasks: ITask[]) {
        return allTasks.map(task => {
            if (task.category.plan === 'active') return task;
        }).filter(e => e);
    }

    getPlanCompleteTasks (allTasks: ITask[]) {
        return allTasks.map(task => {
            if (task.category.plan === 'complete') return task;
        }).filter(e => e);
    }

    getDevelopmentActiveTasks (allTasks: ITask[]) {
        return allTasks.map(task => {
            if (task.category.development === 'active') return task;
        }).filter(e => e);
    }

    getDevelopmentCompleteTasks (allTasks: ITask[]) {
        return allTasks.map(task => {
            if (task.category.development === 'complete') return task;
        }).filter(e => e);
    }

    getTestTasks (allTasks: ITask[]) {
        return allTasks.map(task => {
            if (task.category === 'Test') return task;
        }).filter(e => e);
    }

    getDeployTasks (allTasks: ITask[]) {
        return allTasks.map(task => {
            if (task.category === 'Deploy') return task;
        }).filter(e => e);
    }

    getTaskById (id: number) {
        return SAVED_TASKS.find(task => task.id == id);
    }

    getTotalTasks () {
        return SAVED_TASKS.length;
    }

    // constructor (private http: Http) {
    //     this.http.get('../assets/data/tasks.json').subscribe((res: Response) => {
    //         console.log('_____________', res.json());
    //         return this.tasks = res.json();
    //     });
    // }
}