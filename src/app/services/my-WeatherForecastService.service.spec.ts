/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyWeatherForecastServiceService } from './my-WeatherForecastService.service';

describe('Service: MyWeatherForecastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyWeatherForecastServiceService]
    });
  });

  it('should ...', inject([MyWeatherForecastServiceService], (service: MyWeatherForecastServiceService) => {
    expect(service).toBeTruthy();
  }));
});
