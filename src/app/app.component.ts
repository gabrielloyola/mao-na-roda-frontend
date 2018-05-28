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
  
  constructor(
    private _fb: FormBuilder,
    private apiService: ApiService,
  ) {
    fontawesome.library.add(faGithub);
    this.filterForm = this._fb.group({
      solvedProblems: [true],
      unsolvedProblems: [true],
      problemsFrom: [null],
      problemsTo: [null]
    });
    this.setup();
  }

  private setup() {
    this.markers = this.apiService.getProblems();
  }

  public onDateChange() {
    let params = {
      prob_start: this.filterForm.controls.problemsFrom.value,
      prob_end: this.filterForm.controls.problemsTo.value,
    }
    this.apiService.loadProblems(params, true);
  }
}
