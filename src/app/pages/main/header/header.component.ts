import {MainService} from '../../main/main.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html' ,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  currentUser: String;

  pageTitle: string = "My Family Tree"

  constructor(private router: Router,private mainService: MainService) {
 this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
 
  }

}