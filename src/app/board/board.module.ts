import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        BoardComponent
    ],
    declarations: [BoardComponent]
})

export class BoardModule {}