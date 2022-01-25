import { Component, OnInit } from "@angular/core";
import { WeatherDataService } from "../weather-data.service";
import { weatherData } from "../weatherData";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-forecast",
  templateUrl: "./forecast.component.html",
  styleUrls: ["./forecast.component.css"],
})

export class ForecastComponent implements OnInit {
  constructor(private weatherDataService: WeatherDataService) {}

  storageHasSomething: boolean = false;
  environment = environment;
  math = Math;

  weatherData: weatherData[];
  weatherDayVector: weatherData[];
  weatherResetVector: weatherData[];

  count: number[] = [0, 1, 2, 3];

  ngOnInit(): void {
    this.proceed();
  }

  async getForecastWeather(city) {

    let result = await this.weatherDataService
      .getForecastWeather(city)
      .then((response) => {
        this.weatherData = response;
        let currentDate = new Date().toLocaleString();
        this.weatherResetVector = response["list"].filter((x) =>
          x["dt_txt"].includes("06:00:00")
        );

        this.weatherDayVector = response["list"].filter(
          (x) =>
            (x["dt_txt"].includes("06:00:00") ||
              x["dt_txt"].includes("12:00:00") ||
              x["dt_txt"].includes("18:00:00") ||
              x["dt_txt"].includes("21:00:00")) &&
            !x["dt_txt"].substring(8, 10).includes(currentDate.substring(8, 10))
        );

        this.storageHasSomething = true;

        localStorage.setItem("forecastResponse", JSON.stringify(response));
      });

    return result;
  }

  async proceed() {
    this.weatherData = JSON.parse(localStorage.getItem("forecastResponse"));

    if (!(this.weatherData == null)) {
      this.weatherResetVector = this.weatherData["list"].filter((x) =>
        x["dt_txt"].includes("06:00:00")
      );

      let currentDate = new Date().toLocaleString();

      this.weatherDayVector = this.weatherData["list"].filter(
        (x) =>
          (x["dt_txt"].includes("06:00:00") ||
            x["dt_txt"].includes("12:00:00") ||
            x["dt_txt"].includes("18:00:00") ||
            x["dt_txt"].includes("21:00:00")) &&
          !x["dt_txt"].substring(8, 10).includes(currentDate.substring(8, 10))
      );

      this.storageHasSomething = true;
    }
  }
}
