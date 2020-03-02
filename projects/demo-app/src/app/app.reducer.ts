import {ActionReducerMap} from '@ngrx/store';
import {counterReducer} from 'counter-store-lib';
import {AppState} from './app.state';


export const reducers: ActionReducerMap<AppState> = {
    counter: counterReducer,
};
