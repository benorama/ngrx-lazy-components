import {CommonModule} from '@angular/common';
import {Component, EventEmitter, Input, NgModule, Output} from '@angular/core';

@Component({
    templateUrl: './counter-controls-element.component.html',
    styleUrls: ['./counter-controls-element.component.scss']
})
export class CounterControlsElementComponent {

    @Input() name: string;
    @Input() total: number;

    @Output() decrement = new EventEmitter();
    @Output() increment = new EventEmitter();
    @Output() reset = new EventEmitter();

    constructor() {
        console.log('CounterControlsElementComponent constructor');
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
    declarations: [CounterControlsElementComponent],
    exports: [CounterControlsElementComponent],
    imports: []
})
export class CounterControlsModule { // No export statement if this module specification only belongs to our lazy-loaded component
}
