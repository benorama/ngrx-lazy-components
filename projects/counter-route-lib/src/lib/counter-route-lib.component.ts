import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {CounterActions} from 'counter-store-lib';
import {select, Store} from '@ngrx/store';

@Component({
    selector: 'lib-counter-route-lib',
    templateUrl: './counter-route-lib.component.html',
    styleUrls: ['./counter-route-lib.component.scss']
})
export class CounterRouteLibComponent {

    name = 'Route lib';
    total$: Observable<number>;

    constructor(private store: Store<any>) {
        console.log('CounterRouteLibComponent constructor');
        this.total$ = this.store.pipe(select('counter', 'total'));
    }

    onDecrementClick() {
        this.store.dispatch(new CounterActions.DecrementAction());
    }

    onIncrementClick() {
        this.store.dispatch(new CounterActions.IncrementAction());
    }

    onResetClick() {
        this.store.dispatch(new CounterActions.ResetAction());
    }

}
