import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  public lineChartData = [];
  public lineChartLabels;
  public lineChartColors;

  constructor(
    private apiService: ApiService
  ) {
    this.lineChartColors = [
      { // grey
        backgroundColor: 'rgba(62, 155, 180, 0.2)',
        borderColor: 'rgba(62, 155, 180, 1)',
        pointBackgroundColor: 'rgba(62, 155, 180, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(62, 155, 180, 0.8)'
      },
      { // dark grey
        backgroundColor: 'rgba(118, 255, 3, 0.2)',
        borderColor: 'rgba(118, 255, 3,1)',
        pointBackgroundColor: 'rgba(118, 255, 3, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(118, 255, 3, 1)'
      }
    ];
    this.setup();
  }

  private setup() {
    this.apiService.getFrequencies().subscribe(
      data => this.lineChartData = data,
      error => console.log(error)
    );
    this.apiService.getFrequenciesLabels().subscribe(
      data => this.lineChartLabels = data,
      error => console.log(error)
    );
  }
}
