import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DashboardModule } from './dashboard/dashboard.module';
import { BoardModule } from './board/board.module';
import { TaskModule } from './task/task.module';

import { routes } from './app.router';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        DashboardModule,
        BoardModule,
        TaskModule,
        routes
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {}