import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { BoardTaskModule } from './board-task/board-task.module';

@NgModule({
    imports: [
        CommonModule,
        BoardTaskModule
    ],
    exports: [
        BoardComponent
    ],
    declarations: [BoardComponent]
})

export class BoardModule {}