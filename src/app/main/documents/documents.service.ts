import { Injectable, Component } from '@angular/core';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { Http, RequestOptions  , Headers } from '@angular/http';

@Component({
    providers: [Http]
})

@Injectable()
export class DocumentService {
    public headers: Headers;
    currentsession = JSON.parse(localStorage.getItem('currentsession'));

        public UploadResult: string;
        public host = 'http://40.76.197.18';
    
    constructor(private _http: Http){

    }
    
    getDocumentPerType(token: string, permmissionid: number){

        const url = this.host+'/api/Document/GetDocumentPermssionTypes' + '/' + token + '/'  + permmissionid;
        const getDocPerType = url;

        const headers = new Headers({ 'Cache-Control': 'no-cache', 'Pragma': 'no-cache', 'Expires': '-1' });
        const options = new RequestOptions({ headers: headers });

        return this._http.get(getDocPerType);
           
    }
    
    getDocumentLogs(token: string, id: string){

        const url = this.host+'/api/Document/GetDocumentLogs' + '/' + token + '/'  + id;
        const  getDocLogs = url;

        const  headers = new Headers({ 'Cache-Control': 'no-cache', 'Pragma': 'no-cache', 'Expires': '-1' });
        const  options = new RequestOptions({ headers: headers });

        return this._http.get(getDocLogs);
    }

    
    getDocuments(){
        const url = this.host+'/api/Document/GetDocuments/' + this.currentsession.Token; ;
        const headers = new Headers({ 'Cache-Control': 'no-cache', 'Pragma': 'no-cache', 'Expires': '-1' });
        const options = new RequestOptions({ headers: headers });
        return this._http.get(url);
    }
    
     deleteDocument(id: string, token: string) {
        const url = this.host+'/api/Document/DeleteDocument' + '/' + token + '/'  + id;
        const   deleteByIdUr = url;
       
    }


}
