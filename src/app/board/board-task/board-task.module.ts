import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardTaskComponent } from './board-task.component';
import { FormatPipe } from "../../pipes/format.module";

@NgModule({
    imports: [
        CommonModule,
        FormatPipe
    ],
    exports: [
        BoardTaskComponent
    ],
    declarations: [BoardTaskComponent]
})

export class BoardTaskModule {}