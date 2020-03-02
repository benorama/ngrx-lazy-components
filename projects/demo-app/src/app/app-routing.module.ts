import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
    {path: 'counter', loadChildren: () => import('./counter-route/counter-route.module').then(m => m.CounterRouteModule)},
    {path: 'counter-lib', loadChildren: () => import('counter-route-lib').then(m => m.CounterRouteLibModule)}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
