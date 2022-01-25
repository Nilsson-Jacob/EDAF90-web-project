import { Component } from '@angular/core';
import { WeatherDataService} from './weather-data.service';
import { weatherData} from './weatherData';
 
@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})

export class AppComponent {
 title = 'Skiner solen?';
 weatherData: weatherData [];
 loading: boolean = false;
 
 constructor(private weatherDataService: WeatherDataService) {
 }
 
}
