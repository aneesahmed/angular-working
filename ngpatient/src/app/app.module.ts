import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import {PatientlistService} from './patientlist.service';

import { HttpModule }    from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent
  ],
  imports: [
    BrowserModule,
     HttpModule
  ],
  providers: [PatientlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
