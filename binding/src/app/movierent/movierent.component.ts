import { Component, OnInit,OnDestroy } from '@angular/core';
import { Movierent } from './movie.model';
import { Input } from '@angular/core';
import { OnChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { movieservice } from './movie.service';

@Component({
  selector: 'app-movierent',
  templateUrl: './movierent.component.html',
  styleUrls: ['./movierent.component.css']
})
export class MovierentComponent implements OnInit,OnDestroy,OnChanges {
  rent:Movierent[];

  constructor( private movieservice:movieservice) {

   }

  ngOnInit() {

    this.rent=this.movieservice.rentals();
  }
ngOnDestroy(){

}
@Input()
moviecode:number;
ngOnChanges(){

}
@Output()
notificationEvent = new EventEmitter<string>();
checkstore(){
  this.notificationEvent.emit("movie rented by customer")
}
}
