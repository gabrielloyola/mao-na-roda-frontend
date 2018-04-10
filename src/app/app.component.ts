import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mão na roda';
  locationChosen: boolean = false;

  lat: number =  -25.436011;
  lng: number = -49.271747;

  markers: any[] = [
    {
      "latitude": -25.436011,
      "longitude": -49.271747
    },
    {
      "latitude": -25.436204,
      "longitude": -49.2720907
    },
    {
      "latitude": -25.435559,
      "longitude": -49.271601
    },
    {
      "latitude": -25.470442,
      "longitude": -49.245428
    },
    {
      "latitude": -25.436185,
      "longitude": -49.277133
    },
    {
      "latitude": -25.434867,
      "longitude": -49.281553
    },
    {
      "latitude": -25.455158,
      "longitude": -49.282377
    },

    {
      "latitude": -25.455119,
      "longitude": -49.288128
    },
    {
      "latitude": -25.456016,
      "longitude": -49.281024
    },
    {
      "latitude": -25.458613,
      "longitude": -49.284071
    },
  ]
}
