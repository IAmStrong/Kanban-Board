import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {
    constructor (private dataService: DataService) {}

    ngOnInit () {
        console.log('YESS!!!! :::: ', this.dataService);
    }
}