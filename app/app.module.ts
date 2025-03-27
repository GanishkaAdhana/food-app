import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './screen/navbar/navbar.component';
import { FooterComponent } from './screen/footer/footer.component';
import { CarouselComponent } from './screen/carousel/carousel.component';
import { CardsComponent } from './screen/cards/cards.component';
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



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    CardsComponent,
    FoodItemsComponent,
    MainComponent,
    RatingComponent,
    MithaiComponent,
    LoginComponent,
    SigninComponent,
    ItalianComponent,
    ThaiComponent,
    KoreanComponent,
    ChineseComponent,
    JapaneseComponent,
    BakeryComponent,
    DrinksComponent,
    CartComponent,
    ThankyouComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
