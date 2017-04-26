import { Component } from "@angular/core";

@Component({
    selector: 'user-form',
    templateUrl: 'user-form.component.html'
})

export class UserFormComponent{
    pageTitle:string = 'User table';        
    userList:any[] = [
        {
            "id": 1,
            "name": "John Doe",
            "email": 'jd@email.com',
            "age": 24
        },
        {
            "id": 2,
            "name": "Vick Duck",
            "email": "vd@email.com",
            "age": 29
        }
    ];
    
}