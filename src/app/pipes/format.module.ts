import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapitalizeFirstLetterPipe } from './capitalize-first-letter.pipe';
import { FormatTaskIdPipe } from './format-task-id.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CapitalizeFirstLetterPipe,
        FormatTaskIdPipe
    ],
    exports: [
        CapitalizeFirstLetterPipe,
        FormatTaskIdPipe
    ]
  })

export class FormatPipe {}