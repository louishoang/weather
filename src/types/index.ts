export interface City {
  id: number;
  name: string;
  long: number;
  lat: number;
  icon?: string;
  temp: number;
  description?: string | null ;
}

export interface FetchState<T> {
  readonly data: T | null;
  readonly error: string | null;
}

export interface StoreState {
  readonly cities:  FetchState<City[]>;
}