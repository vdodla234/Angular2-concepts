import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {
  lb:string;
  kg:string;

  transform(input: number, unit: string) {
    let outputweight;
        if (unit === 'lb') {
            outputweight = (input)*2.205 ;
            return outputweight ;
        } 
         if (unit === 'kg'){
            outputweight = (input/2.205);
            return outputweight;
        }
      }

}
