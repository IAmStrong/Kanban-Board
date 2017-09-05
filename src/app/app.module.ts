import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routes } from './app.router';
import { AppComponent } from './app.component';
import { BoardModule } from './board/board.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BoardModule,
        DashboardModule,
        routes
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {}