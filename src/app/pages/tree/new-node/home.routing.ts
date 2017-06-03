import { Routes, RouterModule }  from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from "app/pages/home/home.component";

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },


];

export const homerouting: ModuleWithProviders = RouterModule.forChild(routes);
