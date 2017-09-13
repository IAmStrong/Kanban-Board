import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardTaskComponent } from './board-task.component';
import { FormatTaskIdModule } from "../../pipes/format-task-id.module";

@NgModule({
    imports: [
        CommonModule,
        FormatTaskIdModule
    ],
    exports: [
        BoardTaskComponent
    ],
    declarations: [BoardTaskComponent]
})

export class BoardTaskModule {}