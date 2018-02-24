import { Component} from '@angular/core';
@Component({
    selector:'app-my',
    templateUrl:'./app-my.component.html'
})
export class MyComponent {
  title: 'my';
  myname: string ='Vineeth';
  myphonenumber: number=9806161111;
  mycollege: string ='UNCC';
  personal(){
    return this.myname;
    
  };
  stringn:string;

  mycolor= 'green';
  web="http://www.google.com"
  backgroundcolor='red';
  greet(){
    alert("good morning!")
  }
  yourname(){
    alert("your name is "+this.myname)
  }
  submit(){
    console.log("submit")
  }
selectCustomerId = 124;

    
  }


