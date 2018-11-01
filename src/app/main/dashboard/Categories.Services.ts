import { Injectable, Component } from '@angular/core';
import {
    Http, Request, RequestMethod, Response,
    RequestOptions, Headers

} from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AuthenticationService } from '../Login/Authentication.Service';
import { HttpClient } from '@angular/common/http';

declare var $: any;
@Component({
    providers: [Http]
})

@Injectable()
// tslint:disable-next-line:component-class-suffix
export class CategoryServices {
    constructor(private _http: HttpClient){

    }
    public headers: Headers;
    public host = 'http://' + window.location.host;

    public _getCategoriesUrl: string = this.host + '/api/Document/GetCategories';
    // public _getCardsUrl: string = this.host + '/api/Document/GetCards';

    // public _insertCategoriesUrl: string = this.host + '/api/Document/CreateCategory';
    // public _updateCategoriesUrl: string = this.host + '/api/Document/UpdateCategory';
    // public _assignDocCategoryUrl: string = this.host + '/api/Document/AssignDocCategory';
    // public HttpStatusCode: number;
   
   
    // constructor(private _http: Http, public DAuthenticationService: AuthenticationService) {
    // }

    // tslint:disable-next-line:typedef
    getCategories(token: string) {
        const url = 'http://localhost:57366/api/Document/GetCategories/' + token ;

        const getDocType = url;
        console.log(getDocType);
        // alert(getDocType);
        const headers = new Headers({ 'Cache-Control': 'no-cache', 'Pragma': 'no-cache', 'Expires': '-1' });
        const options = new RequestOptions({ headers: headers });

        return this._http.get(getDocType);
            // .map(res => <CategoryModel[]>res.json())
            // .catch(this.handleError);
    }
    // getCards(token: string,categoryid:number): Observable<CategoryModel> {

    //     var getCards = this._getCardsUrl + "/" + token + "/" + categoryid;
    //     let headers = new Headers({ 'Cache-Control': 'no-cache', 'Pragma': 'no-cache', 'Expires': '-1' });
    //     let options = new RequestOptions({ headers: headers });

    //     return this._http.get(getCards, options)
    //         .map(res => {
                
    //             return <CategoryModel>res.json()
    //         })
    //         .catch(err => {
    //             return this.handleError(err)
    //         })
            
        
    // }


    // insertCategory(Category: CategoryModel, token: string) {
    //     let body = JSON.stringify(Category);
    //     var saveCategory = this._insertCategoriesUrl + "/" + token;     
        
    //         var ajaxRequest = $.ajax({
    //             type: "POST",
    //             url: saveCategory,
    //             headers: {
    //                 "content-type": "application/json",
    //                 "cache-control": "no-cache",
    //                 'Access-Control-Allow-Origin': '*',
    //                 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
    //                 'Access-Control-Request-Method': '*',
    //                 'Access-Control-Allow-Headers': '*',
    //                 'Accept': 'application/json',
    //                 'allow-navigation': '*'

    //             },
    //             async: false,
    //             contentType: false,
    //             processData: false,
    //             data: body

    //         });

    //         ajaxRequest.done(function (xhr, textStatus) {
                
    //             status = textStatus;
    //             this.UploadResult = textStatus;
    //         });

        
    // }
    // updateCategory(Category: CategoryModel, token: string) {
    //     let body = JSON.stringify(Category);
    //     var saveCategory = this._updateCategoriesUrl + "/" + token;

    //     var ajaxRequest = $.ajax({
    //         type: "PUT",
    //         url: saveCategory,
    //         headers: {
    //             "content-type": "application/json",
    //             "cache-control": "no-cache",
    //             'Access-Control-Allow-Origin': '*',
    //             'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
    //             'Access-Control-Request-Method': '*',
    //             'Access-Control-Allow-Headers': '*',
    //             'Accept': 'application/json',
    //             'allow-navigation': '*'

    //         },
    //         async: false,
    //         contentType: false,
    //         processData: false,
    //         data: body

    //     });

    //     ajaxRequest.done(function (xhr, textStatus) {

    //         status = textStatus;
    //         this.UploadResult = textStatus;
    //     });


    // }

    // assingDocumentCategory(token: string,docid:any,catgeoryid:any) {
        
    //     var saveCategory = this._assignDocCategoryUrl + "/"+ token+"/" + docid + "/" + catgeoryid;

    //     var ajaxRequest = $.ajax({
    //         type: "POST",
    //         url: saveCategory,
    //         headers: {
    //             "content-type": "application/json",
    //             "cache-control": "no-cache",
    //             'Access-Control-Allow-Origin': '*',
    //             'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
    //             'Access-Control-Request-Method': '*',
    //             'Access-Control-Allow-Headers': '*',
    //             'Accept': 'application/json',
    //             'allow-navigation': '*'

    //         },
    //         async: false,
    //         contentType: false,
    //         processData: false,
            

    //     });

    //     ajaxRequest.done(function (xhr, textStatus) {

    //         status = textStatus;
    //         this.UploadResult = textStatus;
    //     });


    // }

    // private handleError(error: Response) {

    //     this.HttpStatusCode = error.status;      
        
       
        


    //     return Observable.throw(error.json().error || error.status.toString());
    // }


}
