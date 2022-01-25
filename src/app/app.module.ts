import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule} from './app-routing.module';
import { WeatherDataService } from './weather-data.service';

// Components
import { AppComponent } from './app.component';
import { StartpageComponent } from './startpage/startpage.component';
import { ForecastComponent } from './forecast/forecast.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';

// Angular material
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

 
@NgModule({
 declarations: [
   AppComponent,
   StartpageComponent,
   ForecastComponent,
   StatisticsComponent,
   CurrentWeatherComponent
 ],
 imports: [
   BrowserModule,
   BrowserAnimationsModule,
 
   MatTabsModule,
   MatCardModule,
   MatButtonModule,
   FormsModule,
   MatTableModule,
   MatGridListModule,
   MatFormFieldModule,
   MatIconModule,
   MatInputModule,

   AppRoutingModule,
   HttpClientModule
   
 ],
 providers: [WeatherDataService],
 bootstrap: [AppComponent]
})
export class AppModule { }


