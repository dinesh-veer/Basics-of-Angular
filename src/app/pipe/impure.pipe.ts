import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impure',
  pure: false
})
export class ImpurePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(args[0]=="sum")
      return value.reduce((sum, first)=> sum +first );
    else
      return value*2;
  }

}
