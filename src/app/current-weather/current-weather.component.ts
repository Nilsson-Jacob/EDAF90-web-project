import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../weather-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  
  constructor(private weatherDataService:WeatherDataService) { 
  }

  storageNotEmpty: boolean = false;
  environment = environment;
  math = Math;
  weatherData;
  timestamp;
  city;

  ngOnInit(): void {
    this.weatherData = JSON.parse(localStorage.getItem("response"));
    this.city = localStorage.getItem("city");
    this.timestamp = localStorage.getItem("timestamp");
    if(this.weatherData !== null){
      this.storageNotEmpty = true;
    }
  }

  getCurrentWeather(city){
    this.weatherDataService.getCurrentWeather(city)
      .subscribe((response) => {
        this.weatherData = response
        localStorage.setItem("response", JSON.stringify(response));
      })
    this.city = this.toUpper(city);
    localStorage.setItem("city", this.toUpper(city));
    this.timestamp = new Date();
    localStorage.setItem("timestamp", this.timestamp);
    this.storageNotEmpty = true;
  }

  toUpper(name){
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  
}

