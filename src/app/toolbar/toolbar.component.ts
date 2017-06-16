import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { CollapseService } from '../common/collapse-service';

@Component({
    selector: 'toolbar',
    templateUrl: 'toolbar.component.html',
    styleUrls: ['toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
    menuTitle: any;
    private initCollapseState: boolean = false;
    
    constructor(private router: Router, private collapsibleService: CollapseService){
    }

    ngOnInit(){

        this.menuTitle = this.router.events.subscribe(params => {
            if(params instanceof NavigationStart) {
                let temp = params.url;
                temp = temp.split('/')[1].toUpperCase();
                temp = temp.charAt(0).toUpperCase() + temp.substr(1).toLowerCase();
                this.menuTitle = temp;
            }
            
        });
    }

    public hamburgerMenuClicked(){
        console.log('collapse');
        this.initCollapseState = !this.initCollapseState;
        this.collapsibleService.changeCollapsible(this.initCollapseState);
    }

}