export interface City {
  id: number;
  name: string;
  long: number;
  lat: number;
  icon?: string;
  temp: number;
  description?: string | null ;
}