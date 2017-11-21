import { Component } from '@angular/core';
import { CollapseService } from './common/collapse-service';
import { ModalService } from './modal/modal.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  subscription:Subscription;
  flag: boolean;

    constructor(private collapsibleService: CollapseService, private modalService: ModalService){ 
    }


    ngOnInit(){
        this.subscription = this.collapsibleService.collapsibleItem$
            .subscribe(flag => {
              this.flag = flag
              console.log('app component: ' + this.flag)
            })
    }


    ngOnDestroy() {
        // prevent memory leak when component is destroyed
        this.subscription.unsubscribe();
    }

    fabClick(id){
      console.log('fab clicked');
      this.modalService.open(id)
    }
}
