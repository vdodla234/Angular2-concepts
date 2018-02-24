import { Injectable } from "@angular/core";
import { Movierent } from './movie.model';


@Injectable()

export class movieservice{
     rent:Movierent[];
     rentals(){
     this.rent=[
        new Movierent('Dunkirk','Nolan','Thriller',2017,'4/5',6,'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201707/dunkirk-647_072117021757.jpg'),
        new Movierent('starwars','Johnson','fiction',2016,'3/5',4.5,'http://starwarsblog.starwars.com/wp-content/uploads/2017/01/sw-the-last-jedi-tall-1200x630.jpg'),
        new Movierent('Anabelle','cdaes','scary',2014,'4/5',1,'https://d2a0bnlkc0czvp.cloudfront.net/posters/original/annabelle_creation.jpeg?1491073341'),
        new Movierent('Blazerunner','fdhfhj','scientific comedy',2017,'2/5',7,'https://i.ytimg.com/vi/Ip-_2kSUMlI/maxresdefault.jpg')];
     return this.rent;
    }

}