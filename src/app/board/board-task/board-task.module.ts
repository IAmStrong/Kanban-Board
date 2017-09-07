import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardTaskComponent } from './board-task.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        BoardTaskComponent
    ],
    declarations: [BoardTaskComponent]
})

export class BoardTaskModule {}