import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'; //

import { routes } from './app.router';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { BoardModule } from './board/board.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        BoardModule,
        DashboardModule,
        routes
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})

export class AppModule {}