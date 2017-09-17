import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    totalTasks: number;

    constructor (private _dataService: DataService) {}

    ngOnInit () {
        this.totalTasks = this._dataService.getTotalTasks();
    }
}