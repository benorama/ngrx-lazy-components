import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CounterRouteLibComponent} from './counter-route-lib.component';

const routes: Routes = [
    {path: '', component: CounterRouteLibComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CounterRouteLibRoutingModule {
}
