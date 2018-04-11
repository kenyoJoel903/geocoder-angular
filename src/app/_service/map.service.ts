import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import * as L from "leaflet";

@Injectable()
export class MapService {

  public map: L.Map;
  public baseMaps: any;

  constructor(private http: HttpClient) {
    const osmAttr =
          "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>, " +
          "Tiles courtesy of <a href='http://hot.openstreetmap.org/' target='_blank'>Humanitarian OpenStreetMap Team</a>";

        const esriAttr =
          "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, " +
          "iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, " +
          "Esri China (Hong Kong), and the GIS User Community";

        const cartoAttr =
          "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> " +
          "&copy; <a href='http://cartodb.com/attributions'>CartoDB</a>";

        const geodirAttr ="<a href='http://www.geodir.co/'><b>Geodir</b></a> &copy; Map";

        this.baseMaps = {
          OpenStreetMap: L.tileLayer(
            "http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
            {
              attribution: osmAttr
            }
          ),
          Esri: L.tileLayer(
            "http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
            {
              attribution: esriAttr
            }
          ),
          CartoDB: L.tileLayer(
            "http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
            {
              attribution: cartoAttr
            }
          ),
          GeoDir: L.tileLayer(
            "http://geocoder.geodir.co/geocoder.api/tile/v1/{z}/{x}/{y}",
            {
              attribution: geodirAttr
            }
          ),
        };

   }

  addmarker(lat, lng, descripcion){
    let location = L.latLng(lat, lng);
    const popup = `<div>Latitude: ${lat}<div><div>Longitude: ${lng}<div><br/><div>${descripcion}<div>`;
    const icon = L.icon({
      iconUrl: "assets/marker-icon.png",
      shadowUrl: "assets/marker-shadow.png"
    });

    const marker = L.marker(location, {
      draggable: true,
      icon
    })
      .bindPopup(popup, {
        offset: L.point(12, 6)
      })
      .addTo(this.map)
      .openPopup();

    marker.on("click", () => marker.remove());
   }

}
