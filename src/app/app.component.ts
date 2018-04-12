import { Component, OnInit, Input } from '@angular/core';
import { CompleterService, CompleterData, CompleterItem } from 'ng2-completer';
import { Distrito } from './_model/distrito';
import { DistritoService } from './_service/distrito.service';

import * as L from "leaflet";
import { MapService } from './_service/map.service';
import { GeocoderService } from './_service/geocoder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  queryDistrito:string;
  distritos:Distrito[];
  distritoSelected:Distrito;
  token:string;
  address:string;
  dataService: CompleterData;

  constructor(private distritoService:DistritoService, 
    private completerService: CompleterService,
    private mapService:MapService,
    private geocoderServide:GeocoderService){
    
  }

  ngOnInit() {this.initMapa();}

  initMapa(){
    const center = L.latLng(-12.1035703, -77.0327431);
    const mapa =  L.map("map", {
      zoomControl: false,
      center: center,
      zoom: 16,
      minZoom: 2,
      maxZoom: 19,
      layers: [this.mapService.baseMaps.GeoDir]
    });
    L.control.zoom({ position: "topright" }).addTo(mapa);
    L.control.layers(this.mapService.baseMaps).addTo(mapa);
    L.control.scale().addTo(mapa);
    this.mapService.map = mapa;
  }


  onSearchDistrito(event: any){
    let obsDistritos = this.distritoService.getDistritos( event.target.value, this.token);
    obsDistritos.subscribe(data=>{
      this.distritos = data;
      this.dataService = this.completerService.local(this.distritos, 'name', 'name' );
    })
  }

  onItemSelect(selected: CompleterItem) {
    if (selected) {
      this.distritoSelected = selected.originalObject;
    }
  }

  searchAddress(){
    this.geocoderServide.simpleAddress(this.distritoSelected.ubigeo,this.address, this.token)
      .subscribe((data: any)=>{
        if(data.address){
          let _address = data.address;
            let descripcion = _address[0].results[0]['properties']['label'];
            this.mapService.addmarker(_address[0].results[0]['geometry']['coordinates'][1], _address[0].results[0]['geometry']['coordinates'][0], descripcion);
         
        }
      })

  }
}
