import { MainService } from '../main.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Signup } from 'app/pages/main/signup/signup.interface';
//import { MainService } from 'app/pages/main/main.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

public signup: Signup;
    errMsg='Email id is already registered..!';
    public errorMsg:string;
    
    ngOnInit() {
        this.signup = {
            yourName: '',
            familyName: '',
            email: '',
            password: '',
        }
    }

    constructor(
        private mainService: MainService,
        private router: Router
    ) { }

    registerUser() {
        // Variable to hold a reference of addUser
        let signupOperation: Observable<Signup[]>;
        signupOperation = this.mainService.addUser(this.signup)
        signupOperation.subscribe(
            signup => {
                this.router.navigate(['/']);
            },
            err => {
                // Log errors if any
                this.errorMsg=err;
                console.log(err);
            });
    }

}
