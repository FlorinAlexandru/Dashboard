import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
    selector: 'modal-dialog',
    templateUrl: 'modal.component.html',
    styleUrls: ['modal.component.css']
})

export class ModalDialog implements OnInit {
    @Input() modalId: string;
    @Input() bodyText: string;
    @Input() titleText: string;
    isOpen: boolean = false;


    constructor(private modalService: ModalService){        
    }


    ngOnInit(){
        this.modalService.register(this);
    }

    close(): void{
        console.log('close modal');
        this.modalService.close(this.modalId);
    }
}