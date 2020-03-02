import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {LazyElementsModule} from '@angular-extensions/elements';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {CounterStoreModule} from 'counter-store-lib';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {reducers} from './app.reducer';
import {environment} from '../environments/environment';

@NgModule({
    declarations: [
        AppComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        BrowserModule,
        LazyElementsModule,
        CounterStoreModule,
        AppRoutingModule,
        StoreModule.forRoot(reducers),
        !environment.production ? StoreDevtoolsModule.instrument({maxAge: 25}) : []
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
