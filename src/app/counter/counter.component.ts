import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment, decrement, reset, double } from './state/counter.actions';
import { CounterState } from './state/counter.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  count$: Observable<CounterState>;

  constructor(private store: Store<{ counter: CounterState }>) {
    this.count$ = store.select('counter');
  }

  incrementByOne() {
    this.store.dispatch(increment());
  }
  decrementByOne() {
    this.store.dispatch(decrement());
  }
  resetToZero() {
    this.store.dispatch(reset());
  }
  double() {
    this.store.dispatch(double());
  }
}
