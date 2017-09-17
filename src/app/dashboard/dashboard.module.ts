import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from "@angular/router";
import { DataService } from '../services/data.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        DashboardComponent
    ],
    providers: [DataService],
    declarations: [DashboardComponent]
})

export class DashboardModule {}