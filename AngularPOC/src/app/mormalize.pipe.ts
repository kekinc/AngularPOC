import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'normalize'
})

export class Normalize implements PipeTransform{
    transform(num: string): string{
        let newVal: string;
        const numParts = num.toString().split('.');
        numParts[0] = numParts[0].replace(/\B(?=(\d{3})+(?!\d))/g,  ',');

        newVal = numParts.join('.');
        return newVal;
    }
}