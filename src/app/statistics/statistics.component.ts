import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../weather-data.service';
import { weatherData} from '../weatherData';
import { environment } from 'src/environments/environment';
 
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
 
  constructor(private weatherDataService:WeatherDataService) { }
  
  storage: boolean = false;
  environment = environment;
  math = Math;
  statData;
  loading: boolean = false;
  timestamp;
  city;
 
  loadingH: boolean = false;
  historyData;
  lon;
  lat;
  dt; 
 
  ngOnInit(): void {
    this.statData = JSON.parse(localStorage.getItem("response"));
    this.historyData = JSON.parse(localStorage.getItem("responseH"));
    this.city = localStorage.getItem("city");
    this.timestamp = localStorage.getItem("timestamp");
    if(this.historyData !== null){
      this.storage = true;
    }
  }
 
  getStatWeather(city){
    this.loading = true;
    this.city = this.toUpper(city);
    localStorage.setItem("city", this.toUpper(city));
    this.timestamp = new Date();
    localStorage.setItem("timestamp", this.timestamp);
    
    this.weatherDataService.getCurrentWeather(city)
      .subscribe((response) => {
        this.statData = response
        localStorage.setItem("response", JSON.stringify(response));
      
        this.weatherDataService.getHistoryWeather(response["coord"]["lat"], response["coord"]["lon"], response["dt"]-86400)
      .subscribe((responseH) => {
        this.historyData = responseH
        localStorage.setItem("responseH", JSON.stringify(responseH))
      })
    })
    this.storage = true;
  }

  toUpper(name){
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  
  sekToh(sek){
    return sek/3600; 
  }

  calcUnix(nbr){    
  let mili = nbr*1000; 
  let time = new Date(mili).toLocaleTimeString();
  return time;
  }
  
}
