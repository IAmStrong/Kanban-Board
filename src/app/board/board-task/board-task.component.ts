import { Component, OnInit, Input } from '@angular/core';
import { ITask } from '../../shared/task.model';

@Component({
    selector: 'board-task',
    templateUrl: './board-task.component.html',
    styleUrls: ['./board-task.component.css']
})

export class BoardTaskComponent implements OnInit {
    @Input()
    task: ITask[];
    
    constructor () {}

    ngOnInit () {}
}