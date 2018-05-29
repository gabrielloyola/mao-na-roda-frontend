import { ApiService } from './api.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import fontawesome from '@fortawesome/fontawesome';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public markers;
  public filterForm: FormGroup;
  public params = {
    prob_start: null,
    prob_end: null
  };
  public slice;

  constructor(
    private _fb: FormBuilder,
    private apiService: ApiService
  ) {
    fontawesome.library.add(faGithub);
    this.filterForm = this._fb.group({
      solvedProblems: [true],
      unsolvedProblems: [true],
      problemsFrom: [null],
      problemsTo: [null]
    });
  }

  public onChangeDate() {
    this.params.prob_start = this.filterForm.controls.problemsFrom.value;
    this.params.prob_end = this.filterForm.controls.problemsTo.value;
    this.apiService.loadProblems(this.params, this.slice);
  }

  public onChangeSolved(event) {
    if (event.checked) {
      if (this.filterForm.controls.unsolvedProblems.value) {
        this.slice = '';
      } else {
        this.slice = 'solved';
      }
    } else {
      if (!this.filterForm.controls.unsolvedProblems.value) {
        this.filterForm.controls.unsolvedProblems.setValue(true);
      }
      this.slice = 'unsolved';
    }
    this.apiService.loadProblems(this.params, this.slice);
  }

  public onChangeUnsolved(event) {
    if (event.checked) {
      if (this.filterForm.controls.solvedProblems.value) {
        this.slice = '';
      } else {
        this.slice = 'unsolved';
      }
    } else {
      if (!this.filterForm.controls.solvedProblems.value) {
        this.filterForm.controls.solvedProblems.setValue(true);
      }
      this.slice = 'solved';
    }
    this.apiService.loadProblems(this.params, this.slice);
  }
}
