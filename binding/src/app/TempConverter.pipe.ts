
 
import {Pipe, PipeTransform} from '@angular/core';
 
@Pipe({
    name: 'tempConverter'
})
export class TempConverterPipe implements PipeTransform {
    C:String;
    F:String;
    transform(input: number, unit: string) {
        let outputTemp;
        if(input !=null){
            if (unit === 'C') {
                outputTemp = (input - 32) /1.8 ;
                return outputTemp ;
            } 
             if (unit === 'F'){
                outputTemp = (input * 1.8 ) + 32
                return outputTemp;
            }
        
        }
        return;
    }
}