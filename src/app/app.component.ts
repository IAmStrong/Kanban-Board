import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title: any;

    constructor(private router: ActivatedRoute, private titleService: Title) {
        console.log(this.router.snapshot);
    }

    // ngOnInit () {
    //             // this.title = route.snapshot.data;

    //     // this.sub = this.router.params.subscribe(params => {
    //     //     console.log(params);
    //     // });
    //     this.setTitle('w');
    //     console.log(this.router.url);
    // }

    // public setTitle (newTitle: string) {
    //     this.titleService.setTitle('My awesome app');
    // }
}