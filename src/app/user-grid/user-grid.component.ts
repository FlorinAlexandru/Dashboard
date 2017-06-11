import { Component, OnInit, ViewChild } from "@angular/core";
import { UserService } from '../user-grid/user-grid.service';
import { ModalDirective } from 'ngx-bootstrap/modal';


@Component({
    selector: 'user-grid',
    templateUrl: 'user-grid.component.html',
    styleUrls: ['user-grid.component.css'],
    providers: [UserService]
})

export class UserGridComponent implements OnInit{
    @ViewChild('childModal') public childModal:ModalDirective;

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
        this.childModal.show();
    }
    
    public hideChildModal():void {
        this.childModal.hide();
    }
    
}