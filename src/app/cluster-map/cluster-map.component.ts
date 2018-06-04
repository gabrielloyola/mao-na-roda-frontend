import { Component } from '@angular/core';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { ApiService } from '../api.service';
import { error } from 'util';

@Component({
  selector: 'app-cluster-map',
  templateUrl: './cluster-map.component.html',
  styleUrls: ['./cluster-map.component.scss']
})
export class ClusterMapComponent {
  public markers;
  public mapConfig;

  constructor(
    private apiService: ApiService
  ) {
    this.setup();
    this.mapConfig = {
      lat: -25.442942,
      lng: -49.275880,
      zoom: 11
    };
  }

  private setup() {
    this.apiService.getProblems().subscribe(
      data => this.markers = data,
      err => console.log(err)
    );
  }
}
