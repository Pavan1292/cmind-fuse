import { Injectable, Component } from '@angular/core';
import {
    Http, Request, RequestMethod, Response,
    RequestOptions, Headers
} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

declare var $: any;

@Component({
    providers: [Http]
})

@Injectable()
// tslint:disable-next-line:component-class-suffix
export class ConnectionsServices {
 

    public UploadResult: string;

    constructor(private _http: Http) {
    }
    currentsession = JSON.parse(localStorage.getItem('currentsession'));

    public headers: Headers;
    public host = 'http://40.76.197.18';

    public _getConUrl: string = this.host + '/api/Connection/GetConnections'; 
    public _getConGrpUrl: string = this.host + '/api/Connection/GetConnectionGroups';
    

    // tslint:disable-next-line:typedef
    getGetConnectionsList() {
        const url = this.host + '/api/Connection/GetConnections/' + this.currentsession.Token ;
        const getCon = url;
        const headers = new Headers({ 'Cache-Control': 'no-cache', 'Pragma': 'no-cache', 'Expires': '-1' });
        const options = new RequestOptions({ headers: headers });
        return this._http.get(getCon);
    }
    // tslint:disable-next-line:typedef
    getNonConnectedUserList(token: string){

        const url = this.host+'/api/Connection/GetNotConnectedList/' +  '/' + token;
        const getCon = url;
       // alert(getCon);
        const headers = new Headers({ 'Cache-Control': 'no-cache', 'Pragma': 'no-cache', 'Expires': '-1' });
        const options = new RequestOptions({ headers: headers });

        return this._http.get(getCon);
            
    }

    // tslint:disable-next-line:typedef
    getConGrpUsrList(token: string){

        const url = this.host+'/api/Connection/GetConnectionGroupUsers' + '/' + token;
        const getCon = url;
       // alert(getCon);
        const headers = new Headers({ 'Cache-Control': 'no-cache', 'Pragma': 'no-cache', 'Expires': '-1' });
        const options = new RequestOptions({ headers: headers });

        return this._http.get(getCon);
    
    }
    
    // tslint:disable-next-line:typedef
    getGetConnectionsDetails(token: string, id: string ){

        const url = this.host+'/api/Connection/GetConnectionDetails' + '/' + token + '/' + id;
        const getCon = url;

        // var getCon = this._getConDetUr + "/" + token + "/" + id;
        // alert(getDocType);
        const headers = new Headers({ 'Cache-Control': 'no-cache', 'Pragma': 'no-cache', 'Expires': '-1' });
        const options = new RequestOptions({ headers: headers });

        return this._http.get(getCon);
            
    }

    // tslint:disable-next-line:typedef
    getConnectionGroups(token: string){
       
        const url = this.host+'/api/Connection/GetConnectionGroupUsers' + '/' + token ;
        const getCon = url;
        const headers = new Headers({ 'Cache-Control': 'no-cache', 'Pragma': 'no-cache', 'Expires': '-1' });
        const options = new RequestOptions({ headers: headers });

        return this._http.get(getCon);
            
    }

    // tslint:disable-next-line:typedef
    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Opps!! Server error');
    }
}
