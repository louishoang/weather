import * as Types from '../types/index';
import { 
  FETCH_CITIES_START,
  FETCH_CITIES_SUCCEEDED,
  FETCH_CITIES_FAILED 
} from '../constants/index';
import { Action, combineReducers } from 'redux';

const defaultFetchState = <T>(): Types.FetchState<T> => {
  return {
    data: null,
    error: null
  };
};

const citiesReducer = (
  state: Types.FetchState<Types.City[]> = defaultFetchState(),
  action: Action
) => {
  switch (action.type) {
    case FETCH_CITIES_START:
      return {
        ...state
      };
    case FETCH_CITIES_SUCCEEDED:
      return {
        
      };
    case FETCH_CITIES_FAILED:
      return {
        
    };
    default:
      return state;
  }
};

export default combineReducers<Types.StoreState>({cities: citiesReducer});