import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient } from '@angular/common/http';


@Component({
    providers: []
})

@Injectable()

// tslint:disable-next-line:component-class-suffix
export class AuthenticationService {
    // http://40.76.197.18/#/Login
    public host = 'http://40.76.197.18/'
    public ValidUser: boolean;
    public _getSessionURL: string = this.host + '/api/User/GetCredentailsSession';
    // public session: Session[];
    
    constructor(
        private _router: Router, private _http: HttpClient) {
            }

    // tslint:disable-next-line:typedef
    Logout() {
        console.log('Hi from Service');

       localStorage.removeItem('currentsession');

        this._router.navigate(['Login']);
    }
    // }
    // tslint:disable-next-line:typedef
    // LogoutSession() {

    //     localStorage.removeItem('currentsession');

    //     this._router.navigate(['Login']);
    // }

    // tslint:disable-next-line:typedef
    Login(obj){
        
     //     const _getCredentialSession = this._getSessionURL + '/' + username + '/' + passsword +'/';
     //     alert(_getCredentialSession);
        // tslint:disable-next-line:whitespace
        const url = 'http://40.76.197.18/api/User/GetCredentailsSession/'+obj.email+'/'+obj.password;
        return this._http.get(url);
    }

     // tslint:disable-next-line:typedef
     CheckCrendetails(username, passsword)
    {
       
     }

     // tslint:disable-next-line:typedef
    //  private handleError(error: Response) {
    //     alert(Response);
    //      return Observable.throw(error.json().error || 'Opps!! Server error');
    // // }

   
}

