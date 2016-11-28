import { combineReducers } from 'redux';
import * as loading from './loading';

export interface IAppState {
  loading: boolean;
}

export const rootReducer = combineReducers<IAppState>({
  loading: loading.loadingReducer
});