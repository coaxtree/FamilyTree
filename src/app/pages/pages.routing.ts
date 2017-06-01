import { Routes, RouterModule }  from '@angular/router';
//import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import { PagesComponent } from "app/pages/pages.component";

export const routes: Routes = [

 {
    path: '',
    loadChildren: 'app/pages/main/main.module#MainModule'
  },
   {
    path: 'home',
    loadChildren: 'app/pages/home/home.module#HomeModule'
  }
    
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
