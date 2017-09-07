import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";
import { Title } from '@angular/platform-browser';
import { Http, Response } from "@angular/http";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title: string;
    searchAvailable: boolean;
    tasks: Object;

    constructor (
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title,
        private http: Http
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

        this.getData();
    }

    private getData () {
        this.http.get('/assets/data/tasks.json').subscribe((res: Response) => {
            this.tasks = res.json();
        });
    }

    private setTitle (title: string) {
        const currentTitle = this.titleService.getTitle();
        const changeTitle = this.titleService.setTitle.bind(this.titleService);
        const newTitle = `Kanban - ${title}`;

        currentTitle != newTitle && changeTitle(newTitle);
    }
}

// https://angular.io/tutorial/toh-pt3
// https://angular-2-training-book.rangle.io/handout/routing/routeparams.html
// https://angular-2-training-book.rangle.io/handout/components/app_structure/passing_data_into_components.html