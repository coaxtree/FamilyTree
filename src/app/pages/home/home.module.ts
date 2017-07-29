import {MainService} from '../main/main.service';
import { MainModule } from '../main/main.module';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { homerouting } from "app/pages/home/home.routing";
import { AuthGuard } from "app/pages/main/auth.guard";
import { HeaderComponent } from "app/pages/home/header/header.component";
import { ChatComponent } from './chat/chat.component';
import { HomeService } from "app/pages/home/home.service";


//import { MainModule } from "app/pages/main/main.module";

//import { MainService } from 'app/pages/main/main.service';

@NgModule({
  imports: [
    CommonModule,
    homerouting,
    FormsModule
  ],
  declarations: [HomeComponent,HeaderComponent, ChatComponent],
  providers: [ MainService, AuthGuard,HomeService]
})
export class HomeModule { }
