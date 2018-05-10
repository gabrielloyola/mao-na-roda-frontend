import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import fontawesome from '@fortawesome/fontawesome';

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY'
  },
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public types = [
    {value: 'problema', viewValue: 'Problemas'},
    {value: 'solucao', viewValue: 'Soluções'}
  ];
  
  constructor(
  ) {
    fontawesome.library.add(faGithub);
  }
}
