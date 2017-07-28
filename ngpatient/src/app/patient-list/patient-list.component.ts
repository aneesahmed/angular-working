import { Component, OnInit } from '@angular/core';
import {PatientlistService} from '../patientlist.service';

@Component({
  selector: 'app-patient-list',
  template: '<h1>Patient list component </h1>',
  //templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

   
  constructor() {
    
   }

  ngOnInit() {
  }

}
