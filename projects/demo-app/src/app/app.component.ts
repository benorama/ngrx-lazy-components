import {Component, ComponentFactoryResolver, ComponentRef, HostBinding, Injector, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {UntilDestroy} from '@ngneat/until-destroy';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {CounterActions} from 'counter-store-lib';

import {AppState} from './app.state';
import {CounterControlsComponent} from './counter-controls/counter-controls.component';
import {CounterDumbComponent} from './counter-dumb/counter-dumb.component';

@UntilDestroy()
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    @HostBinding('attr.class') class = 'mx-auto';

    counterTotal$: Observable<number>;

    // Declarative with ngComponentOutlet
    counterDumbComponent: Promise<Type<CounterDumbComponent>>;
    counterDumbInjector: Injector;

    // Imperactive with ComponentFactoryResolver
    @ViewChild('counterControlsContainer', {read: ViewContainerRef}) counterControlsContainerRef: ViewContainerRef;
    counterControlsRef: ComponentRef<CounterControlsComponent>;

    counterControlsElementUrl = './assets/counter-controls-element.js';
    counterControlsElementVisible = false;

    constructor(private injector: Injector,
                private resolver: ComponentFactoryResolver,
                private store: Store<AppState>) {
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

    // Declarative with ngComponentOutlet
    loadCounterDumb() {
        if (this.counterDumbComponent) {
            return;
        }

        if (!this.counterDumbInjector) {
            this.counterDumbInjector = Injector.create({
                providers: [{
                    provide: 'counterData',
                    useValue: {name: 'Dumb', counterTotal$: this.counterTotal$}
                }],
                parent: this.injector
            });
        }

        this.counterDumbComponent = import(`./counter-dumb/counter-dumb.component`).then(m => m.CounterDumbComponent);
        // Note: you can use /* webpackPrefetch: true */
        // OR /* webpackChunkName: 'counterDumbComponent' */ to generate counterDumbComponent.[hash].js
    }

    // Imperactive with ComponentFactoryResolver
    loadCounterControls() {
        if (this.counterControlsRef) {
            return;
        }

        // tslint:disable-next-line:no-shadowed-variable
        import(`./counter-controls/counter-controls.component`).then(({CounterControlsComponent}) => {
            this.counterControlsRef = this.counterControlsContainerRef.createComponent(
                this.resolver.resolveComponentFactory(CounterControlsComponent),
                null,
                this.injector
            );
            const counterControlsInstance: CounterControlsComponent = this.counterControlsRef.instance;
            // @Input properties
            counterControlsInstance.name = 'Controls';
            counterControlsInstance.total$ = this.counterTotal$;
            // @Output properties
            counterControlsInstance.increment
                .pipe(takeUntil(counterControlsInstance.destroy$))
                .subscribe(event => { this.increment(); });
            counterControlsInstance.decrement
                .pipe(takeUntil(counterControlsInstance.destroy$))
                .subscribe(event => { this.decrement(); });
            counterControlsInstance.reset
                .pipe(takeUntil(counterControlsInstance.destroy$))
                .subscribe(event => { this.reset(); });
        });
    }

    loadCounterControlsElement() {
        this.counterControlsElementVisible = true;
    }

}
