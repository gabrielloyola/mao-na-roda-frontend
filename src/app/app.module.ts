import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule, MatCheckboxModule, MatNativeDateModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { NguiMapModule } from '@ngui/map';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { ClusterMapComponent } from './cluster-map/cluster-map.component';
import { HeatMapComponent } from './heat-map/heat-map.component';
import { ChartComponent } from './chart/chart.component';

const appRoutes: Routes = [
  { path: 'clustermap', component: ClusterMapComponent },
  { path: 'heatmap', component: HeatMapComponent },
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
    HeatMapComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    FontAwesomeModule,
    ChartsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDS7Z96FryfrEI2XBCJEBnVKMY3Qw3tMcE'
    }),
    AgmJsMarkerClustererModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyDS7Z96FryfrEI2XBCJEBnVKMY3Qw3tMcE'})
  ],
  providers: [ApiService, HttpClient],
  bootstrap: [AppComponent]
})


export class AppModule {}