import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './pages.routing';
import { PagesComponent } from './pages.component';
import { MainModule } from "app/pages/main/main.module";
import { HomeModule } from "app/pages/home/home.module";
//import { PagesComponent } from "app/pages/pages.component";

@NgModule({
  imports: [
    CommonModule,
    MainModule,
    HomeModule,
    routing
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
