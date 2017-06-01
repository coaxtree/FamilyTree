import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SignupComponent } from './signup/signup.component';
import { MainComponent } from './main.component';
import { mainrouting } from "app/pages/main/main.routing";
import { LoginComponent } from './login/login.component';

//import { AuthGuard } from './helper/guards/auth.guard';

import { MainService } from 'app/pages/main/main.service';
import { AuthGuard } from "app/pages/main/auth.guard";
import { EqualValidator } from "app/pages/main/equal-validator.directive";
import { HeaderComponent } from "app/pages/main/header/header.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    mainrouting,
  ],
  declarations: [LoginComponent, SignupComponent, MainComponent,EqualValidator,HeaderComponent],
    providers: [
    MainService,
    AuthGuard
  ],
 
})
export class MainModule { }
