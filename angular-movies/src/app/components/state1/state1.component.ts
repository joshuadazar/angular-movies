import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterActions } from '../../Store/counter.actions';


@Component({
  selector: 'app-state1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './state1.component.html',
  styleUrl: './state1.component.scss'
})

export class State1Component {
  store = inject(Store);
  count$: Observable<number> = this.store.select(state => state.counter.count);
  @ViewChild('valor') valor!: ElementRef;


  increment() {
    this.store.dispatch(CounterActions.increment());
  }

  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }

  reset() {
    this.store.dispatch(CounterActions.reset());
  }

  incrementBy() {
    this.store.dispatch(CounterActions.incrementBy({ amount: Number(this.valor.nativeElement.value) }));
  }

}

