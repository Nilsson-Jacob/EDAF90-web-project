// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiKey: "54fbf402396396be9e3277da299490fa",
  baseURL: 'https://api.openweathermap.org/data/2.5/',

  toCelsius(temp){
    return Math.round(temp - 273);
  },

  getIconUrl(data){
    return "http://openweathermap.org/img/wn/%s@2x.png".replace("%s", data["weather"][0]["icon"]);
  },

  getHistoryIconUrl(data){
    return "http://openweathermap.org/img/wn/%s@2x.png".replace("%s", data["current"]["weather"][0]["icon"]);
  },

  getIconUrlForecast(data, num){
    return "http://openweathermap.org/img/wn/%s@2x.png".replace("%s", data[num]["weather"][0]["icon"]);
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
