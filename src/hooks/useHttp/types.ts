export interface Props {
  url: string;
}

export interface IState<T> {
  isLoading: boolean;
  data: T | null;
  error: Error | null;
}

export enum ACTIONS {
  LOADING,
  SUCCESS,
  ERROR,
}

export type IActions<IData> =
  | { type: ACTIONS.ERROR; err: Error }
  | { type: ACTIONS.LOADING }
  | { type: ACTIONS.SUCCESS; data: IData };
