//** THANK YOU https://www.rocketlaunch.live/ !!!
export interface IRLLaunches {
  valid_auth: boolean;
  count: number;
  limit: number;
  total: number;
  last_page: number;
  result: Result[];
}

export interface Provider {
  id: number;
  name: string;
  slug: string;
}

export interface Vehicle {
  id: number;
  name: string;
  company_id: number;
  slug: string;
}

export interface Location {
  id: number;
  name: string;
  state: string;
  statename: string;
  country: string;
  slug: string;
}

export interface Pad {
  id: number;
  name: string;
  location: Location;
}

export interface Mission {
  id: number;
  name: string;
  description?: any;
}

export interface EstDate {
  month?: number;
  day?: number;
  year?: number;
  quarter?: any;
}

export interface Tag {
  id: number;
  text: string;
}

export interface Result {
  id: number;
  cospar_id: string;
  sort_date: string;
  name: string;
  provider: Provider;
  vehicle: Vehicle;
  pad: Pad;
  missions: Mission[];
  mission_description?: any;
  launch_description: string;
  win_open: string;
  t0?: any;
  win_close?: any;
  est_date: EstDate;
  date_str: string;
  tags: Tag[];
  slug: string;
  weather_summary: string;
  weather_temp?: number;
  weather_condition: string;
  weather_wind_mph?: number;
  weather_icon: string;
  weather_updated?: Date;
  quicktext: string;
  media: any[];
  result: number;
  suborbital: boolean;
  modified: Date;
}
