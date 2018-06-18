import { ApiService } from './api.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import fontawesome from '@fortawesome/fontawesome';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material';
import { Moment } from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public markers;
  public filterMapForm: FormGroup;
  public filterChartForm: FormGroup;
  public mapParams = {
    prob_start: null,
    prob_end: null
  };
  public chartParams = {
    freq_start: null,
    freq_end: null
  };
  public slice;

  constructor(
    private _fb: FormBuilder,
    private apiService: ApiService
  ) {
    fontawesome.library.add(faGithub);
    this.filterMapForm = this._fb.group({
      solvedProblems: [true],
      unsolvedProblems: [true],
      problemsFrom: [null],
      problemsTo: [null]
    });
    this.filterChartForm = this._fb.group({
      initialMonth: [null],
      endMonth: [null]
    });
  }

  public onChangeDate() {
    this.mapParams.prob_start = this.filterMapForm.controls.problemsFrom.value;
    this.mapParams.prob_end = this.filterMapForm.controls.problemsTo.value;
    this.apiService.loadProblems(this.mapParams, this.slice);
  }

  public onChangeSolved(event) {
    if (event.checked) {
      if (this.filterMapForm.controls.unsolvedProblems.value) {
        this.slice = '';
      } else {
        this.slice = 'solved';
      }
    } else {
      if (!this.filterMapForm.controls.unsolvedProblems.value) {
        this.filterMapForm.controls.unsolvedProblems.setValue(true);
      }
      this.slice = 'unsolved';
    }
    this.apiService.loadProblems(this.mapParams, this.slice);
  }

  public onChangeUnsolved(event) {
    if (event.checked) {
      if (this.filterMapForm.controls.solvedProblems.value) {
        this.slice = '';
      } else {
        this.slice = 'unsolved';
      }
    } else {
      if (!this.filterMapForm.controls.solvedProblems.value) {
        this.filterMapForm.controls.solvedProblems.setValue(true);
      }
      this.slice = 'solved';
    }
    this.apiService.loadProblems(this.mapParams, this.slice);
  }

  public onChangeMonth() {
    this.chartParams.freq_start = this.filterChartForm.controls.initialMonth.value;
    this.chartParams.freq_end = this.filterChartForm.controls.endMonth.value;
    this.apiService.loadFrequencies(this.chartParams);
  }
}
