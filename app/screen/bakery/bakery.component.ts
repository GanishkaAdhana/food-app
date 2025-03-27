import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.component.html',
  styleUrl: './bakery.component.css'
})
export class BakeryComponent  implements OnInit{
  // constructor
    constructor(){


    }

    // ngOnIT
    ngOnInit(): void {
    

    }
    // pricing and max min
    price : number = 50;
    productQuantity : number = 1;
    quantity(value:string){
      const price = 50;
      const j = price;

    if(this.productQuantity <8 && value == "max"){
      this.productQuantity+=1;
        this.price = this.productQuantity*j;
      
    }
    else if(this.productQuantity>1 && value =="min"){
      this.productQuantity-=1;
      this.price = this.productQuantity*j;
    }
      
    }
  }