import { Component} from '@angular/core';
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent{
  rating = 0;
 
  // for displaying rating 
  five(value:string){if(value=="star5"){this.rating=5;}else{this.rating=0;}}
  four(value_1:string){if(value_1=="star4"){this.rating=4;}else{this.rating=0;}}
  three(value_2:string){if(value_2=="star3"){this.rating=3;}else{this.rating=0;}}
  two(value_3:string){if(value_3=="star2"){this.rating=2;}else{this.rating=0;}}
  one(value_4:string){if(value_4=="star1"){this.rating=1;}else{this.rating=0;}
  }
  
}