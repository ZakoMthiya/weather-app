import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-today',
  templateUrl: './weather-today.component.html',
  styleUrls: ['./weather-today.component.css']
})
export class WeatherTodayComponent implements OnInit {

  lat;
  lng;
  weather;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    if("geolocation" in navigator) {
      navigator.geolocation.watchPosition(success => {
        this.lat = success.coords.latitude;
        this.lng = success.coords.longitude;

        this.weatherService.getWeatherByCoordinates(this.lat, this.lng)
          .subscribe(data => {
            this.weather = data;
            console.log(data);

          })
      })
    }
  }

  getCity(city) {
    this.weatherService.getWeatherByCity(city)
      .subscribe(data => {
        this.weather = data;
      })
  }
}
