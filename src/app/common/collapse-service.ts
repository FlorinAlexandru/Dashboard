import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class CollapseService{
    private _collapsibleItemSource = new BehaviorSubject<boolean>(false);

    collapsibleItem$ = this._collapsibleItemSource.asObservable();

    changeCollapsible(flag){
        this._collapsibleItemSource.next(flag);
    }
}