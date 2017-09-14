import { Pipe, PipeTransform } from '@angular/core';

const PREFIX: string = '#Task';

@Pipe({
    name: 'formatTaskId'
})

export class FormatTaskIdPipe implements PipeTransform {
    transform (value: number) {
        return `${PREFIX}${value < 10 ? '0' + value : value}`
    }
}