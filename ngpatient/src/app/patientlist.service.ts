import { Injectable } from '@angular/core';

@Injectable()
export class PatientlistService {

  constructor() { }
  getPatients() : string[] {
    return ['patinet1','pat 2','pat3']
  }
}
