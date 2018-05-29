/* import { ApiService } from './../api.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { HeatmapLayer } from '@ngui/map';

@Component({
  selector: 'app-heat-map',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.scss']
})
export class HeatMapComponent implements OnInit {
  public lat;
  public lng;
  public zoom;

  public problem_markers: any = [];

  @ViewChild(HeatmapLayer) heatmapLayer: HeatmapLayer;
  heatmap: google.maps.visualization.HeatmapLayer;
  map: google.maps.Map;
  points = [];

  constructor(
    private apiService: ApiService
  ) {
    this.lat = -25.442942;
    this.lng = -49.275880;
    this.zoom = 14;
  }


  ngOnInit() {
    // this.getProblems();
    this.heatmapLayer['initialized$'].subscribe(heatmap => {
      this.heatmap = heatmap;
      this.map = this.heatmap.getMap();
    });
  }

  /* private getProblems() {
    this.apiService.loadProblems().subscribe(
      data => {
        data.forEach(marker => {
          this.points.push(new google.maps.LatLng(marker.lat_inicio, marker.long_inicio));
        });
      },
      err => console.error(err)
    );
  }
}
*/
