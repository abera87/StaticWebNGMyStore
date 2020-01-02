import { Component, OnInit } from '@angular/core';
import { WeatherForecast } from '../model/WeatherForecast-model';
import { MyWeatherForecastServiceService } from '../services/my-WeatherForecastService.service';

@Component({
  selector: 'app-my-WeatherForecast',
  templateUrl: './my-WeatherForecast.component.html',
  styleUrls: ['./my-WeatherForecast.component.css']
})
export class MyWeatherForecastComponent implements OnInit {


  countries = COUNTRIES;
  weathersForecast: WeatherForecast[];


  constructor(private wfService: MyWeatherForecastServiceService) { }

  ngOnInit() {
    this.getWeathersForecast()
  }

  getWeathersForecast(): void {
    console.log('inside function')
    this.wfService.getWeatherForecast()
    .subscribe(
      data => this.weathersForecast=data
    )
  }

}



interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];
