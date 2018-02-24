import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  Celsius:number;
  Fahrenhiet:number;
  choosemovieid="1";
  shownotification($event){
    alert('you have rented this movie')
  }
}
