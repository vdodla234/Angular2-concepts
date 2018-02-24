export class Movierent{
   public Title:string;
   public director:string;
   public type:string;
   
   
   public Yearofrelease:number;
   public rating:string;
   public Rentalcost:number;
   public imagepath:string;
    constructor(title:string,dir:string,type:string,yearofrelease:number,rating:string,rentalcost:number,imagepath:string){
        this.Title=title;
        this.director=dir;
        this.type=type;
        
        
        
        this.Yearofrelease=yearofrelease;
        this.rating=rating;
        this.Rentalcost=rentalcost;
        this.imagepath=imagepath;

    }
}