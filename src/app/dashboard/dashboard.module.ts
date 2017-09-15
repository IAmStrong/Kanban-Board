import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        DashboardComponent
    ],
    declarations: [DashboardComponent]
})

export class DashboardModule {}