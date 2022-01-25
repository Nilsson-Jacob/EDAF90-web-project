import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { templateJitUrl } from '@angular/compiler';
import { environment } from 'src/environments/environment';
 
@Injectable({
 providedIn: 'root'
})
export class WeatherDataService {

  public forecastData = {}; 
  threeHoursInMilli = 10800000;

  constructor(private http:HttpClient) { }

  public getCurrentWeather(city){
    let url = environment.baseURL + String(`weather?q=${city}&units=metric&appid=${environment.apiKey}`);
    let options: {
      observe: 'body',
      responseType: 'json',
    }
    return this.http.get<any>(url, options);
  }

  public getHistoryWeather(lat, lon, time){
    let url = environment.baseURL + String(`onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&appid=${environment.apiKey}`);
    let options: {
      observe: 'body',
      responseType: 'json',
    }
    return this.http.get<any>(url, options);
  }

  async getForecastWeather(city){
    let currentTime= new Date().getTime();
    
    if(!this.forecastData[city] || this.forecastData[city][1] < currentTime - this.threeHoursInMilli){
      
      let url = environment.baseURL + String(`forecast?q=${city}&appid=${environment.apiKey}&units=metric`);
        let options: {
          observe: 'body',
          responseType: 'json',
          }

      let temp = await this.http.get<any>(url, options).toPromise();
      this.forecastData[city] = [temp, currentTime];

      localStorage.setItem(city, JSON.stringify(temp));

      return temp;
    } else {
      return JSON.parse(localStorage.getItem(city))
    }   
  }
}
