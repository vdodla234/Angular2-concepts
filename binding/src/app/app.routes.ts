import {Routes} from '@angular/router';
import { Homecomponent } from './pages/home.component';
import { aboutcomponent } from './pages/about.component';
import { contactcomponent } from './pages/contact.component';

 export const approutes :Routes =[{path:'home', component:Homecomponent},
 {path:'about', component:aboutcomponent},
 {path:'contact/:id', component:contactcomponent}, 
 {path:'', component:Homecomponent},
 {path:'**', component:Homecomponent},]