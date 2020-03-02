import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CounterControlsModule} from '../counter-controls/counter-controls.component';
import {CounterRouteRoutingModule} from './counter-route-routing.module';
import {CounterRouteComponent} from './counter-route.component';


@NgModule({
    declarations: [
        CounterRouteComponent
    ],
    imports: [
        CommonModule,
        CounterControlsModule,
        CounterRouteRoutingModule
    ]
})
export class CounterRouteModule {
}
