import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatButtonModule,
         MatCheckboxModule,
         MatNativeDateModule,
         MatFormFieldModule,
         MatSelectModule,
         MatDatepickerModule,
         MatCardModule,
         MatToolbarModule,
         MatIconModule,
         MatInputModule,
         MatSlideToggleModule,
         MatButtonToggleModule,
         MatSnackBarModule,
         DateAdapter,
         MAT_DATE_LOCALE,
         MAT_DATE_FORMATS
        } from '@angular/material';
import { MomentModule } from 'angular2-moment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { ClusterMapComponent } from './cluster-map/cluster-map.component';
// import { HeatMapComponent } from './heat-map/heat-map.component';
import { ChartComponent } from './chart/chart.component';
import { SolvedFilterPipe } from './solved-filter.pipe';

const appRoutes: Routes = [
  { path: 'clustermap', component: ClusterMapComponent },
  { path: 'chart', component: ChartComponent },
  { path: '',
    redirectTo: '/clustermap',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ClusterMapComponent,
    ChartComponent,
    SolvedFilterPipe
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatMomentDateModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    MomentModule,
    FontAwesomeModule,
    ChartsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDS7Z96FryfrEI2XBCJEBnVKMY3Qw3tMcE'
    }),
    AgmJsMarkerClustererModule,
    AgmSnazzyInfoWindowModule
  ],
  providers: [
    ApiService,
    HttpClient,
    SolvedFilterPipe,
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})


export class AppModule {}
