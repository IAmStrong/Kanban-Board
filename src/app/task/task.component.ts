import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {
    task: object;

    constructor (
        private _route: ActivatedRoute,
        private _dataService: DataService,
        private _elRef: ElementRef
    ) {}

    ngOnInit () {
        const root = this._elRef.nativeElement.ownerDocument;
        const wrapper = root.querySelector('.main-wrapper');

        wrapper.classList.add('task');

        this.task = this._dataService.getTaskById(this._route.snapshot.params['id']);
    }

    ngAfterViewInit () {

    }
}