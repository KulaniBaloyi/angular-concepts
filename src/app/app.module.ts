import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf,NgFor,NgClass,NgStyle } from '@angular/common';


import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DetailsPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgIf,
    NgClass,
    NgFor,
    NgStyle
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
