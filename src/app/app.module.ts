import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MsAdalAngular6Module, AuthenticationGuard, MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyWeatherForecastComponent } from './my-WeatherForecast/my-WeatherForecast.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { MyIntercepter } from './my-intercepter';

@NgModule({
   declarations: [
      AppComponent,
      MyWeatherForecastComponent,
      MyCounterComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      MsAdalAngular6Module.forRoot({
         tenant: environment.tenant,
         clientId: environment.clientId,
         redirectUri: window.location.origin,
         endpoints: environment.endpoints,
         navigateToLoginRequestUrl: false,
         extraQueryParameter: environment.extraQueryParameter,
         cacheLocation: 'localstorage'
      })
   ],
   providers: [
      AuthenticationGuard,
      MsAdalAngular6Service,
      {
         provide: HTTP_INTERCEPTORS, useClass: MyIntercepter, multi: true
      }],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
