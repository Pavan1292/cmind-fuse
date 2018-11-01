import { Injectable, Component } from '@angular/core';
import {
    Http, Request, RequestMethod, Response,
    RequestOptions, Headers
} from '@angular/http';
// import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

/* 
import { InvitationModel } from '../ClientModels/Connections/InvitationModel'; */

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AuthenticationService } from '../login/Authentication.Service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

declare var $: any;
@Component({
    providers: []
})

@Injectable()
// tslint:disable-next-line:component-class-suffix
export class InvitationServices {
    public headers: Headers;
    public host = 'http://' + window.location.host;

    public _getInvitationUrl: string = this.host + '/api/Connection/GetInvitationDetial';
    
    /* public _updateInviteUrl: string = this.host + '/api/Connection/UpdateUserDetail';
    public _rejectInviteUrl: string = this.host + '/api/Connection/RejectionInvitation';
    public HttpStatusCode: number; */
   

    constructor(private _http: HttpClient, public rAuthenticationService: AuthenticationService) {
    }
    // tslint:disable-next-line:typedef
    submitDetails(user){
        
        /* const _headers = new HttpHeaders({
            'content-type': 'application/json',
            'cache-control': 'no-cache',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
            'Access-Control-Request-Method': '*',
            'Access-Control-Allow-Headers': '*',
            'Accept': 'application/json',
            'allow-navigation': '*'

        }); */

        const saveCategory = this._getInvitationUrl + '/' + user.username  + '/' + user.password + '/' + user.firstname + '/' + user.lastname + '/' + user.userid ;
        const ajaxRequest = $.ajax({
            type: 'POST',
            url: saveCategory,
            headers: {
                'content-type': 'application/json',
                'cache-control': 'no-cache',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
                'Access-Control-Request-Method': '*',
                'Access-Control-Allow-Headers': '*',
                'Accept': 'application/json',
                'allow-navigation': '*'

            },
            async: false,
            contentType: false,
            processData: false,            
            dataType: 'json',
            // tslint:disable-next-line:typedef
            success: function (data) {
                status = data.status;
            },
            // tslint:disable-next-line:typedef
            error: function (data) {
                status = data.status;
             
            }
        });

        console.log(user);
        /* const saveCategory = this._getInvitationUrl;
        return this._http.post(saveCategory, user); */
    }

    // submitDetails (username: string, password: string, firstname: string, lastname: string, email:string , inviteid : string ){
    //     var saveCategory = this._getInvitationUrl + '/' + username  + '/' + password + '/' + firstname + '/' + lastname +"/"+"/""/"
    // }

    /* getInvitationDetails(): Observable<InvitationModel> {

        var getDocType = this._getInvitationUrl;
        // alert(getDocType);
        let headers = new Headers({ 'Cache-Control': 'no-cache', 'Pragma': 'no-cache', 'Expires': '-1' });
        let options = new RequestOptions({ headers: headers });

        return this._http.get(getDocType, options)
            .map(res => <InvitationModel>res.json())
            .catch(this.handleError);
    }
     */


    /* insertUserDetail(username: string, password:string,firstname:string,lastname:string,email:string,inviteid:string) {

        var saveCategory = this._updateInviteUrl + "/" + username + "/" + password + "/" + firstname + "/" + lastname + "/" + email + "/" + inviteid+"/";
        var status;
        var ajaxRequest = $.ajax({
            type: "POST",
            url: saveCategory,
            headers: {
                "content-type": "application/json",
                "cache-control": "no-cache",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
                'Access-Control-Request-Method': '*',
                'Access-Control-Allow-Headers': '*',
                'Accept': 'application/json',
                'allow-navigation': '*'

            },
            async: false,
            contentType: false,
            processData: false,            
            dataType: 'json',
            success: function (data) {
                status=data.status;
            },
            error: function (data) {
                status = data.status;
             
            }
        });

    
        return status;

          /*  ajaxRequest.done(function (xhr, textStatus) {
            alert(textStatus);
            status = textStatus;
            this.UploadResult = textStatus;
        });*/

    // } */


    /* rejectInvitation(inviteid: string) {

        var saveCategory = this._rejectInviteUrl + "/" + inviteid;

        var ajaxRequest = $.ajax({
            type: "POST",
            url: saveCategory,
            headers: {
                "content-type": "application/json",
                "cache-control": "no-cache",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
                'Access-Control-Request-Method': '*',
                'Access-Control-Allow-Headers': '*',
                'Accept': 'application/json',
                'allow-navigation': '*'

            },
            async: false,
            contentType: false,
            processData: false,


        });

        ajaxRequest.done(function (xhr, textStatus) {

            status = textStatus;
            this.UploadResult = textStatus;
        });


    }

 */


    /* private handleError(error: Response) {

        this.HttpStatusCode = error.status;      
        
       
        


        return Observable.throw(error.json().error || error.status.toString());
    } */   
   
}
