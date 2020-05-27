import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url = "https://api.openweathermap.org/data/2.5/weather";
  apiKey = "API_HERE";

  constructor(private http: HttpClient) { }

  getWeatherByCoordinates(lat, lng) {
    let params = new HttpParams()
    .set('lat', lat)
    .set('lon', lng)
    .set('units', 'metric')
    .set('appid', this.apiKey);

    return this.http.get(this.url, { params });
  }

  getWeatherByCity(city: string) {
    let params = new HttpParams()
      .set('q', city)
      .set('units', 'metric')
      .set('appid', this.apiKey);

    return this.http.get(this.url, { params });
  }
}
