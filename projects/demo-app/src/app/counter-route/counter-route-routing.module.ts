import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CounterRouteComponent} from './counter-route.component';

const routes: Routes = [
    {path: '', component: CounterRouteComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CounterRouteRoutingModule {
}
