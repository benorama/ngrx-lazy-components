import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {CounterRouteLibComponent} from './counter-route-lib.component';
import {CounterRouteLibRoutingModule} from './counter-route-lib-routing.module';

@NgModule({
    declarations: [CounterRouteLibComponent],
    imports: [CounterRouteLibRoutingModule, CommonModule]
})
export class CounterRouteLibModule {
}
