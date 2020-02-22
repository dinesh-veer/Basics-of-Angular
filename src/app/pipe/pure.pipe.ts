import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pure'
})
export class PurePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(args[0]=="sum")
      return value.reduce((acc, cur) => acc + cur, 0);
    else
      return value*2;
  }

}
