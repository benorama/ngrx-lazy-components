import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';

import {counterReducer} from './counter.reducer';
import {counterInitialState} from './counter.state';

@NgModule({
  imports: [
      CommonModule,
      StoreModule.forFeature('counter', counterReducer, {initialState: counterInitialState})
  ],
  exports: []
})
export class CounterStoreModule { }
