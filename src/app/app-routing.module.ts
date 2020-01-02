import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyWeatherForecastComponent } from './my-WeatherForecast/my-WeatherForecast.component';
import { AuthenticationGuard } from 'microsoft-adal-angular6';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  //{ path: '', component: AppComponent,canActivate:[AuthenticationGuard] },
  { path: 'counter', component: MyCounterComponent },
  { path: 'weatherforecast', component: MyWeatherForecastComponent, canActivate: [AuthenticationGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
