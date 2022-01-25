import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../weather-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css']
})

export class StartpageComponent implements OnInit {
  constructor(private weatherDataService:WeatherDataService) { 
  }
  weathersthm;
  weathergbg;
  weathermlm;
  environment = environment;
  timestamp;
  math = Math;

  ngOnInit(): void {
    this.timestamp = new Date();
    this.weatherDataService.getCurrentWeather("Stockholm")
      .subscribe((response) => {this.weathersthm = response});
    this.weatherDataService.getCurrentWeather("Göteborg")
      .subscribe((response) => {this.weathergbg = response});
    this.weatherDataService.getCurrentWeather("Malmö")
      .subscribe((response) => {this.weathermlm = response});
  }
}
