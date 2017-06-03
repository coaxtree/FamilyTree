import { Routes, RouterModule }  from '@angular/router';
//import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import { PagesComponent } from "app/pages/pages.component";

export const routes: Routes = [

  {
    path: 'home',
    loadChildren: 'app/pages/home/home.module#HomeModule'
  },

     {
    path: '',
    loadChildren: 'app/pages/tree/tree.module#TreeModule'
  },
 
    
 {
    path: 'login',
    loadChildren: 'app/pages/main/main.module#MainModule'
  }

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
