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

  public problem_markers: any = [];

  constructor(
    private apiService: ApiService
  ) {
    this.lat = -25.442942; 
    this.lng = -49.275880;
    this.zoom = 14;
  }


  ngOnInit(): void {
    this.getProblems();
  }
  
  getProblems() {
    this.apiService.getAllProblems().subscribe(
      data => { this.problem_markers = data; },
      err => console.error(err)
    );
  }
}
