import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title: string;
    searchAvailable: boolean;

    constructor(
        private router: Router, 
        private activatedRoute: ActivatedRoute, 
        private titleService: Title
    ) {}

    ngOnInit () {
        this.router.events
            .filter((event) => event instanceof NavigationEnd)
            .map(() => this.activatedRoute)
            .map((route) => {
                while (route.firstChild) route = route.firstChild;

                return route;
            })
            .filter((route) => route.outlet === 'primary')
            .mergeMap((route) => route.data)
            .subscribe((event) => {
                const title = event.title;
                const searchAvailable = event.searchAvailable;

                this.searchAvailable = searchAvailable;
                this.setTitle(title);
                this.title = title;
            });
    }

    private setTitle (title: string) {
        const currentTitle = this.titleService.getTitle();
        const changeTitle = this.titleService.setTitle.bind(this.titleService);
        const newTitle = `Kanban - ${title}`;

        currentTitle != newTitle && changeTitle(newTitle);
    }
}