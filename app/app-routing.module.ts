import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodItemsComponent } from './screen/food-items/food-items.component';
import { MainComponent } from './screen/main/main.component';
import { RatingComponent } from './screen/rating/rating.component';
import { MithaiComponent } from './screen/mithai/mithai.component';
import { LoginComponent } from './screen/login/login.component';
import { SigninComponent } from './screen/signin/signin.component';
import { ItalianComponent } from './screen/italian/italian.component';
import { ThaiComponent } from './screen/thai/thai.component';
import { KoreanComponent } from './screen/korean/korean.component';
import { ChineseComponent } from './screen/chinese/chinese.component';
import { JapaneseComponent } from './screen/japanese/japanese.component';
import { BakeryComponent } from './screen/bakery/bakery.component';
import { DrinksComponent } from './screen/drinks/drinks.component';
import { CartComponent } from './screen/cart/cart.component';
import { ThankyouComponent } from './screen/thankyou/thankyou.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'main',
    pathMatch:'full',
  },
  {
    path:'mithai',
    component:MithaiComponent,
  },
  {
    path:'food',
    component: FoodItemsComponent,
  },
  {
    path:'main',
    component:MainComponent
  },
  {
    path:'rate',
    component: RatingComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signin',
    component: SigninComponent
  },
  {
    path:'italian',
    component: ItalianComponent
  },
  {
    path:'thai',
    component: ThaiComponent
  },
  {
    path:'korean',
    component: KoreanComponent
  },
  {
    path:'chinese',
    component: ChineseComponent
  },
  {
    path:'japanese',
    component: JapaneseComponent    
  },
  {
    path: 'bakery',
    component: BakeryComponent
  },
  {
    path:'drinks',
    component: DrinksComponent
  },
  {
    path:'cart',
    component: CartComponent
  },
  {
    path:'thankyou',
    component:ThankyouComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
