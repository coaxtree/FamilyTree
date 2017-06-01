import { Component } from '@angular/core';

import { MainService } from '../main/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
 // template: `<p> home works! </p>`
  //styleUrls: ['./home.component.css']
   styleUrls: ['../main/signup/signup.component.css']
})
export class HomeComponent {

  currentUser: String;

  constructor(private mainService: MainService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

}
