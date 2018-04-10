import { ApiService } from './api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title;
  public lat;
  public lng;
  public zoom;
  public problem_markers: any = [];
  public solution_markers: any = [];
  
  constructor(
    private apiService: ApiService
  ) {
    this.title = 'Mão na roda';
    this.lat =  -25.436011;
    this.lng = -49.271747;
    this.zoom = 13;
  }

  ngOnInit(): void {
    this.problem_markers = this.apiService.getAllProblems();
    this.solution_markers = this.apiService.getAllProblems();

    console.log(this.problem_markers);
    console.log(this.solution_markers);
    
  }
}
