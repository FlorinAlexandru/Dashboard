import { Component, OnInit } from "@angular/core";
import { Response, Http } from "@angular/http";
import 'rxjs/add/operator/map'

import { UserService } from '../user-form/user-form.service';

@Component({
    selector: 'user-form',
    templateUrl: 'user-form.component.html',
    styleUrls: ['user-form.component.css']
})

export class UserFormComponent{

    pageTitle:string = 'User form';        
    nameField:string = '';
    emailField:string = '';
    ageField:number = 0;
    submitResponse:any;

    constructor(private _http: Http){

    }

    onSubmit():void {

        var data: object = {
            "name": this.nameField,
            "email": this.emailField,
            "age": this.ageField
        };

        this._http.post('http://localhost:8989/api/submit', data)
            .map(res => res.json())
            .do((data => console.log('All ' + JSON.stringify(data))))
            .subscribe(result => this.submitResponse = result);
    }
    
}