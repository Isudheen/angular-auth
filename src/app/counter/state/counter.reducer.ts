import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, double } from './counter.actions';
import { initialState } from './counter.state';

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(double, (state) => {
    return {
      ...state,
      counter: state.counter * 2,
    };
  })
);
