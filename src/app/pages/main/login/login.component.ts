import { MainService } from '../main.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Login } from 'app/pages/main/login/login.interface';
//import { MainService } from 'app/pages/main/main.service';


@Component({
 selector: 'app-login',
  //moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // users: Login[] = [];
  constructor(
    private route: ActivatedRoute,
    private mainService: MainService,
    private router: Router
    
  ) { }

  public login: Login;
  public registerMsg:any;
  public errorLoginMsg:string;

  regMsg='Congrats! Registration Successful';
  errLoginMsg='Invalid user name or password';
  
  ngOnInit() {
  this.login = {
      email: '',
      password: '',
    }

  this.registerMsg=localStorage.getItem('registerMsg');

  }
 

  submitUser() {
    // Variable to hold a reference of addUser
    console.log("first1")
    
    let signupOperation: Observable<Login[]>;
    console.log("entered")
    signupOperation = this.mainService.getLogin(this.login)
    signupOperation.subscribe(
      login => {
        console.log("hello")
        this.router.navigate(['/home']);
        localStorage.removeItem('registerMsg');
      },
      err => {
        // Log errors if any
        console.log(err);
        this.errorLoginMsg=err;
      });

  }
 
 /*  onSubmit({ value, valid }: { value: Login, valid: boolean }) {
     console.log(value, valid);
   }*/
}
