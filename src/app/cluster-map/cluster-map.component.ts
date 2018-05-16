import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cluster-map',
  templateUrl: './cluster-map.component.html',
  styleUrls: ['./cluster-map.component.scss']
})
export class ClusterMapComponent implements OnInit {
  public lat;
  public lng;
  public zoom;
  public markers_type;

  public all_markers: any = [];
  public problem_markers: any = [];
  public solution_markers: any = [];

  constructor(
    private apiService: ApiService
  ) {
    this.lat = -25.442942; 
    this.lng = -49.275880;
    this.zoom = 14;
    this.markers_type = 'all_markers'
  }


  ngOnInit(): void {
    this.getProblems();
    this.getSolutions();
    this.getAllMarkers();
  }

  private getAllMarkers() {
    this.all_markers = this.problem_markers.concat(this.solution_markers);
  }
  
  private getProblems() {
    this.apiService.getAllProblems().subscribe(
      data => { this.problem_markers = data; },
      err => console.error(err)
    );
  }

  private getSolutions() {
    this.apiService.getAllSolutions().subscribe(
      data => { this.solution_markers = data; },
      err => console.error(err)
    );
  }
}
