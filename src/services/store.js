import { BehaviorSubject } from "rxjs";

export const store = initialState => {
  const state$ = new BehaviorSubject(Object.assign({}, initialState));

  const setState = newState => {
    const currentState = JSON.parse(JSON.stringify(state$.getValue()));

    state$.next({
      ...currentState,
      ...newState
    });
  };

  return {
    state$,
    setState
  };
};
