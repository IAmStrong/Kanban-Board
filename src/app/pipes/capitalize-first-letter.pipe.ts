import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalize'
})

export class CapitalizeFirstLetterPipe implements PipeTransform {
    transform (value: string) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}