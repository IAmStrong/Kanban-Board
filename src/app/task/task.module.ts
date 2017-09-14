import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { FormatPipe } from "../pipes/format.module";

@NgModule({
    imports: [
        CommonModule,
        FormatPipe
    ],
    declarations: [TaskComponent]
})

export class TaskModule {}

// [routerLink]="['/run', run.id]"