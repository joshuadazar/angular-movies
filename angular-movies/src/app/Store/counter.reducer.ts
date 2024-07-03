import { createReducer, on } from '@ngrx/store';
import { CounterActions } from './counter.actions';
import { CounterState } from './counter.state';

const initialState: CounterState = { count: 0 };

export const counterReducer = createReducer(
  initialState,
  on(CounterActions.increment, (state) => {
    return {
      count: state.count + 1
    }
  }),
  on(CounterActions.decrement, (state) => ({ count: state.count - 1 })),
  on(CounterActions.reset, () => ({ count: 0 })),
  on(CounterActions.incrementBy, (state, { amount }) => ({ count: state.count + amount }))
);
