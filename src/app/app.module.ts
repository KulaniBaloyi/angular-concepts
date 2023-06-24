import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf,NgFor,NgClass,NgStyle } from '@angular/common';
import { RouterModule } from '@angular/router';


import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    ProductDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgIf,
    NgClass,
    NgFor,
    NgStyle,
    RouterModule.forRoot([
      { path: 'home', component: AppComponent },
      { path: 'about', component: AboutComponent },
      { path: 'products/:id', component: ProductDetailsComponent },
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
