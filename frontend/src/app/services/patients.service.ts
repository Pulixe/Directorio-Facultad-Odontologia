import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { patient } from '../models/patient';
import { Observable } from 'rxjs';
//CONECTARSE AL SERVIDOR
@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  API_URL = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient) { }

  //metodo para pedir pacientes al servidor
  getPatients() {
    return this.http.get(`${this.API_URL}/patients`);
  }

  getPatient(id: string){

    return this.http.get(`${this.API_URL}/patients/${id}`);

  }

  savePatient(patient:patient){
    return this.http.post(`${this.API_URL}/patients`, patient);

  }

  deletePatient(id: string){
    return this.http.delete(`${this.API_URL}/patients/${id}`);

  }

  updatePatient(id:string|number, updatePatient:patient):Observable<any>{

    return this.http.put(`${this.API_URL}/patients/${id}`, updatePatient);

  }
}
