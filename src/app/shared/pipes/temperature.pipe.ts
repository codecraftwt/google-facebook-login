// temperature.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {
    transform(value: number): string {
        return `${value} \u00B0`;  // \u00B0 is the Unicode for degree symbol (°)
    }
}
