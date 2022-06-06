import { useReducer } from "react";
import { ACTIONS, IActions, IState } from "./types";

const initialState: IState<null> = {
  isLoading: false,
  data: null,
  error: null,
};

function reducer<T>(state: IState<T>, action: IActions<T>): IState<T> {
  switch (action.type) {
    case ACTIONS.LOADING:
      return { ...initialState, isLoading: !state.isLoading };
    case ACTIONS.ERROR:
      return { ...initialState, error: action.err };
    case ACTIONS.SUCCESS:
      return { ...initialState, data: action.data };
    default:
      return state;
  }
}

export const useHttpReducer = () => {
  return useReducer(reducer, initialState);
};
