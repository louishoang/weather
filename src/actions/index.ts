import { City } from '../types';
import * as constants from '../constants';

export interface FetchCities {
  type: constants.FETCH_CITIES_START;
  cities: City[];
}

export interface FetchCitiesSucceeded {
  type: constants.FETCH_CITIES_SUCCEEDED;
  cities: City[];
}

export interface FetchCitiesFailed {
  type: constants.FETCH_CITIES_FAILED;
  error: string;
}

export const fetchCities = () => {
  return {
    type: constants.FETCH_CITIES_START
  };
};

export const fetchCitiesSucceeded = (cities: City[]): FetchCitiesSucceeded => {
  return {
    type: constants.FETCH_CITIES_SUCCEEDED,
    cities
  };
};

export const fetchCitiesFailed = (): FetchCitiesFailed => {
  return {
    type: constants.FETCH_CITIES_FAILED,
    error: 'Something wrong'
  };
};