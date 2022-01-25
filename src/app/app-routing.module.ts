import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartpageComponent } from './startpage/startpage.component';
import { ForecastComponent } from './forecast/forecast.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';

const routes: Routes = [
    { path: '', redirectTo: 'startpage', pathMatch: 'full'},
    { path: 'startpage', component: StartpageComponent},
    { path: 'forecast', component: ForecastComponent },
    { path: 'statistics', component: StatisticsComponent },
    { path: 'current-weather', component: CurrentWeatherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }