import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {BrowserModule} from '@angular/platform-browser';

import {CounterControlsElementComponent} from './counter-controls-element.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    entryComponents: [CounterControlsElementComponent],
    // bootstrap: [CounterElementComponent]
})
export class CounterControlsElementModule {

    constructor(private injector: Injector) {
        const counterControlsElement = createCustomElement(CounterControlsElementComponent, {injector});
        customElements.define('counter-controls-element', counterControlsElement);
    }

    ngDoBootstrap() {

    }

}
