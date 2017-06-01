import { Routes, RouterModule }  from '@angular/router';

//import { Login } from './login.component';
import { ModuleWithProviders } from '@angular/core';
import { SignupComponent } from "app/pages/main/signup/signup.component";
import { LoginComponent } from "app/pages/main/login/login.component";

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

export const mainrouting: ModuleWithProviders = RouterModule.forChild(routes);
