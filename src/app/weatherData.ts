
export class weatherData {
    lat: string;
    lon: string;
    timezone: string;
    timezone_offset: string;
    city: string;
    icon: string;
    temp: string;


    addCurrCityWeather(city, icon, temp){
        this.city = city;
        this.icon = icon;
        this.temp = temp;
    }
 }


 