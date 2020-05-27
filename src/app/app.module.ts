import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherTodayComponent } from './weather-today/weather-today.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { HereMapComponent } from './here-map/here-map.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherTodayComponent,
    HereMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'Angular_Google_Maps_ID_Here'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
