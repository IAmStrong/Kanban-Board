import { Component, OnInit } from '@angular/core';
import { ITask } from '../shared/task.model';
import { DataService } from '../services/data.service';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {
    developmentCompleteTasks: ITask[];
    developmentActiveTasks: ITask[];
    planCompleteTasks: ITask[];
    planActiveTasks: ITask[];
    deployTasks: ITask[];
    testTasks: ITask[];
    todoTasks: ITask[];
    tasks: ITask[];

    constructor (private _dataService: DataService) {}

    ngOnInit () {
        this.tasks = this._dataService.getTasks();
        this.todoTasks = this._dataService.getTodoTasks(this.tasks);
        this.planActiveTasks = this._dataService.getPlanActiveTasks(this.tasks);
        this.planCompleteTasks = this._dataService.getPlanCompleteTasks(this.tasks);
        this.developmentActiveTasks = this._dataService.getDevelopmentActiveTasks(this.tasks);
        this.developmentCompleteTasks = this._dataService.getDevelopmentCompleteTasks(this.tasks);
        this.testTasks = this._dataService.getTestTasks(this.tasks);
        this.deployTasks = this._dataService.getDeployTasks(this.tasks);

        console.log(this.todoTasks);

        console.log(this.tasks);
    }

    showTask (id) {
        console.log(id);
        // console.log(event.target.getAttribute('data-id'));
    }
}