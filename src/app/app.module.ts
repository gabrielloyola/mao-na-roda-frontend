import { HttpClient, HttpHandler } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDS7Z96FryfrEI2XBCJEBnVKMY3Qw3tMcE'
    }),
    AgmJsMarkerClustererModule
  ],
  providers: [ApiService, HttpClient],
  bootstrap: [AppComponent]
})


export class AppModule {}