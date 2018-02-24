import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyComponent} from './app-my.component';
import{ FormsModule} from '@angular/forms';


import { OrderListComponent } from './order/app.order-list.component';
import { MovierentComponent } from './movierent/movierent.component';

import { TempConverterPipe } from './TempConverter.pipe';
import { MypipePipe } from './mypipe.pipe';
import { Services } from '@angular/core/src/view';
import { movieservice } from './movierent/movie.service';
import { Homecomponent } from './pages/home.component';
import { contactcomponent } from './pages/contact.component';
import { aboutcomponent } from './pages/about.component';
import {approutes} from './app.routes';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    AppComponent, MyComponent, OrderListComponent, MovierentComponent,TempConverterPipe, MypipePipe,
    Homecomponent,contactcomponent,aboutcomponent],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [ movieservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
