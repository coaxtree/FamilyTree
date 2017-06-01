import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Signup } from 'app/pages/main/signup/signup.interface';
import { Login } from 'app/pages/main/login/login.interface';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MainService {

  constructor(private http: Http) { }
    // private instance variable to hold base url
    private signupURL = 'http://localhost:3000/auth/signup';
    private loginURL = 'http://localhost:3000/auth/login';

    addUser(user: Object): Observable<Signup[]> {
        let bodyString = JSON.stringify(user); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.signupURL, user, options) // ...using post request
            .map((res: Response) => {
                let user = res.json();
                // store user details 
                localStorage.setItem('currentUser', JSON.stringify(user));
                localStorage.setItem('registerMsg', "Congrats! Registration Successful");

            }).catch((error: any) => Observable.throw('Email id is already registered..!')); //...errors if any
    }



    getLogin(body: Object): Observable<Login[]> {
        console.log("second")
       let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.loginURL, body, options) // ...using post request
            .map((res: Response) =>{
                let user = res.json();
                // store user details 
                localStorage.setItem('currentUser', JSON.stringify(user));
            })
            .catch((error: any) => Observable.throw('Invalid user name or password')); //...errors if any

    }
 

}
