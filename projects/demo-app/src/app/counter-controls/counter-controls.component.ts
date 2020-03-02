import {ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, OnDestroy, Output} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'app-counter-controls',
    templateUrl: './counter-controls.component.html',
    styleUrls: ['./counter-controls.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterControlsComponent implements OnDestroy {

    @Input() name: string;
    @Input() total$: Observable<number>;

    @Output() decrement = new EventEmitter();
    @Output() increment = new EventEmitter();
    @Output() reset = new EventEmitter();

    destroy$ = new Subject();

    constructor() {
        console.log('CounterControlsComponent constructor');
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    onDecrementClick() {
        this.decrement.emit();
    }

    onIncrementClick() {
        this.increment.emit();
    }

    onResetClick() {
        this.reset.emit();
    }

}

@NgModule({
    declarations: [CounterControlsComponent],
    exports: [CounterControlsComponent],
    imports: [
        CommonModule
    ]
})
export class CounterControlsModule { // No export statement if this module specification only belongs to our lazy-loaded component
}
