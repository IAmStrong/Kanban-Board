import { NgModule } from '@angular/core';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { BoardTaskModule } from './board-task/board-task.module';
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        BoardTaskModule
    ],
    exports: [
        BoardComponent
    ],
    providers: [DataService],
    declarations: [BoardComponent]
})

export class BoardModule {}