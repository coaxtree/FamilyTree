import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
//import { appRoutes } from './app.routing';
import { PagesModule } from "app/pages/pages.module";
import { routing } from "app/app.routing";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

//import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    //RouterModule.forRoot(),
    PagesModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
