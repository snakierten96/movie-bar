import { LoadingActions } from '../../actions';

export function loadingReducer(state: boolean = true, action: any) {
  switch(action.type) {
    case LoadingActions.LOADING:
      return LoadingActions.LOADING;
    case LoadingActions.LOADED:
      return LoadingActions.LOADED;
    default:
      return state;
  }
}