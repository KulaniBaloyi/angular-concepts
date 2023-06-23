import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf,NgFor,NgClass,NgStyle } from '@angular/common';


import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
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
