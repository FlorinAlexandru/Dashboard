import { Injectable } from '@angular/core';
import { ModalDialog } from './modal.component';



@Injectable()
export class ModalService{
    private modals: Array<ModalDialog>;

    constructor(){
        this.modals = [];
    }

    register(modal: ModalDialog): void{
        this.modals.push(modal);
    }


    open(id: string){
        const modal = this.findById(id);
        if (modal){
            modal.isOpen =  true;
        }
    }

    close(id: string){
        const modal = this.findById(id);
        if (!modal){
            return;
        }

        modal.isOpen = false;
    }

    private findById(id: string): ModalDialog {
        for (const modal of this.modals){
            if (modal.modalId === id){
                return modal;
            }
        }
        return null;
    }


}