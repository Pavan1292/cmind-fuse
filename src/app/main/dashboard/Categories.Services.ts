import { Injectable, Component } from '@angular/core';
import {
    Http, Request, RequestMethod, Response,
    RequestOptions, Headers

} from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpClient } from '@angular/common/http';

declare var $: any;
@Component({
    providers: [Http]
})

@Injectable()
export class CategoryServices {
    constructor(private _http: HttpClient){

    }
    public headers: Headers;
    public host = 'http://40.76.197.18';
    public _getCategoriesUrl: string = this.host + '/api/Document/GetCategories';
    public _getCardsUrl: string = this.host + '/api/Document/GetCards';
    public _insertCategoriesUrl: string = this.host + '/api/Document/CreateCategory';
    public _updateCategoriesUrl: string = this.host + '/api/Document/UpdateCategory';
    public _assignDocCategoryUrl: string = this.host + '/api/Document/AssignDocCategory';
    // public HttpStatusCode: number;

    // tslint:disable-next-line:typedef
    getCategories(token: string) {
        const url = this.host+'/api/Document/GetCategories/' + token ;

        const getDocType = url;
        console.log(getDocType);
        // alert(getDocType);
        const headers = new Headers({ 'Cache-Control': 'no-cache', 'Pragma': 'no-cache', 'Expires': '-1' });
        const options = new RequestOptions({ headers: headers });

        return this._http.get(getDocType);
            // .map(res => <CategoryModel[]>res.json())
            // .catch(this.handleError);
    }
     // tslint:disable-next-line:typedef
     getCards(token: string) {
        const url = this.host+'/api/Document/GetCards/' + token + '/0';
        const getCards =  url;

        const headers = new Headers({ 'Cache-Control': 'no-cache', 'Pragma': 'no-cache', 'Expires': '-1' });
        const options = new RequestOptions({ headers: headers });

       return this._http.get(getCards);
         
    }


        insertCategory( category: string , token: any) {
            console.log('I am here in insert category');

            const body = JSON.stringify(category , token);
            const saveCategory = this.host+'/api/Document/CreateCategory/' + '/' + token;     
            
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
                data: body

            });

            ajaxRequest.done(function (xhr, textStatus) {
                
                status = textStatus;
                this.UploadResult = textStatus;
            });       
        }

    

}
