import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import fontawesome from '@fortawesome/fontawesome';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(
  ) {
    fontawesome.library.add(faGithub);
  }
}
