import {ChangeDetectionStrategy, Component, Inject, NgModule} from '@angular/core';
import {UntilDestroy} from '@ngneat/until-destroy';
import {Observable} from 'rxjs';
import {CommonModule} from '@angular/common';

@UntilDestroy()
@Component({
    selector: 'app-counter-dumb',
    templateUrl: './counter-dumb.component.html',
    styleUrls: ['./counter-dumb.component.scss']
})
export class CounterDumbComponent {

    name: string;
    total$: Observable<number>;

    constructor(@Inject('counterData') data) {
        console.log('CounterDumbComponent constructor, with injected counterData', data);
        this.name = data.name;
        this.total$ =  data.counterTotal$;
    }

}

@NgModule({
    declarations: [CounterDumbComponent],
    exports: [CounterDumbComponent],
    imports: [CommonModule]
})
class CounterDumbModule { // No export statement, this module specification only belongs to our lazy-loaded component
}
