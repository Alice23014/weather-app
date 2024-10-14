export type CurrentWeatherProps = {
  currentWeather:
    | {
        temperature: number;
        description: string;
        weatherIcon: string;
      }
    | undefined;
};
