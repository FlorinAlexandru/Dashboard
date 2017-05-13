import { Component, OnInit } from "@angular/core";
import { UserService } from '../user-grid/user-grid.service';

@Component({
    selector: 'user-grid',
    templateUrl: 'user-grid.component.html',
    styleUrls: ['user-grid.component.css'],
    providers: [UserService]
})

export class UserGridComponent implements OnInit{

    pageTitle:string = 'User table';        
    errorMsg: string = '';
    userList:any[];
    selectedRow : Number;
    show: boolean = false;

    constructor(private _userService: UserService) {

    }

    ngOnInit(): void{
        this._userService.getUsers()
            .subscribe(
                users => this.userList = users,
                error => this.errorMsg = <any>error
            );
    }

    rowSelected(i:number): void{
        console.log('row clicked ' + i);
        this.selectedRow = i;
    }

    rowDblClick(){
        console.log('row dbl clicked');
        this.show = true;
    }
    
}