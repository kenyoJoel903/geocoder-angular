import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { Ng2CompleterModule } from "ng2-completer";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DistritoService } from './_service/distrito.service';
import { HttpClientModule } from '@angular/common/http';
import { MapService } from './_service/map.service';
import { GeocoderService } from './_service/geocoder.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Ng2CompleterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [DistritoService, MapService, GeocoderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
