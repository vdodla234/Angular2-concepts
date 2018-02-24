import { Pipe,PipeTransform} from '@angular/core';
import { Output } from '@angular/core/src/metadata/directives';
@Pipe({
    name:"mycustom"

})
export class MyCustomPipe implements PipeTransform {
    
    
    
    
       transform(inputTemp:number, tempUnit:string){
           let OutputTemp;
           if(tempUnit==="f"){
            OutputTemp = (inputTemp * 9/5) + 32;
            return OutputTemp;
            
           }
           if (tempUnit ==="c"){
               
            OutputTemp=(inputTemp - 32) * (5 / 9);
            return OutputTemp;

            

           }
           if(tempUnit==="k"){

           }
           
        }
        
           
        
       
}