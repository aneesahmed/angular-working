import { Component, OnInit } from '@angular/core';
import {PatientlistService} from '../patientlist.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

 
  patientList;
  ngOnInit() {
    this.getAllPatients();
  }

  constructor(private patientListService : PatientlistService) {
     //this.patientList = ['pat1', 'pat2', 'pat3','pat4'] ;
     //this.patientList = patientListService.getPatientList();
   }
   getAllPatients() {
     this.patientListService.getPatientsAPI()
       .subscribe(
          data => console.log(JSON.stringify(data)),
          error  => console.log('Server Error')
       );
   }
 

}
