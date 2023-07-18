export interface WeatherItem {
  current?: Current;
  location?: {
    name?: string;
    country?: string;
  };
  forecast?: {
    forecastday?: DayForecast[];
  };
}

export interface Current {
  condition?: {
    icon?: string;
    text?: string;
  };
  temp_c?: number;
  wind_mph?: number;
  humidity?: number;
  wind_dir?: string;
  pressure_mb?: number;
  feelslike_c?: number;
  vis_km?: number;
}

export interface DayForecast {
  date?: string;
  day?: {
    condition?: {
      icon?: string;
      text?: string;
    };
    maxtemp_c?: number;
    mintemp_c?: number;
  };
  astro?: {
    sunrise?: string;
    sunset?: string;
  };
}
