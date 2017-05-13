import { Injectable } from "@angular/core";
import { Response, Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";


@Injectable()
export class UserService{
    private url =  'http://localhost:8989/api/users';

    constructor(private _http: Http){
        
    }

    getUsers(): Observable<any[]>{
        return  this._http.get(this.url)
            .map((response: Response) => response.json())   
            .do(data => console.log('All ' + JSON.stringify(data)))
            .catch(this.errorHandler);
    }

    private errorHandler(error: Response){
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}