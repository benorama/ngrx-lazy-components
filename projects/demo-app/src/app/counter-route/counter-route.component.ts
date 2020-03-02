import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {AppState} from '../app.state';
import {CounterActions} from 'counter-store-lib';

@Component({
    selector: 'app-counter-route',
    templateUrl: './counter-route.component.html',
    styleUrls: ['./counter-route.component.scss']
})
export class CounterRouteComponent {

    counterTotal$: Observable<number>;

    constructor(private store: Store<AppState>) {
        console.log('CounterRouteComponent constructor');
        this.counterTotal$ = this.store.pipe(select('counter', 'total'));
    }

    decrement() {
        this.store.dispatch(new CounterActions.DecrementAction());
    }

    increment() {
        this.store.dispatch(new CounterActions.IncrementAction());
    }

    reset() {
        this.store.dispatch(new CounterActions.ResetAction());
    }

}
