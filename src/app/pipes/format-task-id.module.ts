import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatTaskIdPipe } from './format-task-id.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ 
        FormatTaskIdPipe
    ],
    exports: [
        FormatTaskIdPipe
    ]
  })

export class FormatTaskIdModule {}