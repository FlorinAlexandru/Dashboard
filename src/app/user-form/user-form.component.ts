import { Component, OnInit } from "@angular/core";
import { UserService } from '../user-form/user-form.service';

@Component({
    selector: 'user-form',
    templateUrl: 'user-form.component.html',
    providers: [UserService]
})

export class UserFormComponent implements OnInit{

    pageTitle:string = 'User table';        
    userList:any[];

    constructor(private _userService: UserService) {

    }

    ngOnInit(): void{
        this.userList = this._userService.getUsers();
    }
    
}