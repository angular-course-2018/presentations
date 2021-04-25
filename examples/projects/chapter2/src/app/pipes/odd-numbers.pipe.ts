import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oddNumbers',
  // pure: false
})
export class OddNumbersPipe implements PipeTransform {

  transform(value: {num:number}[], args?: any): any {
    const res = value
    .filter(obj => obj.num % 2 !== 0)
    .map(obj => obj.num);
    return res;
  }

}
