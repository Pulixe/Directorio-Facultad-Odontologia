import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { practicant } from '../models/practicant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PracticantService {
  API_URL = 'http://localhost:3000/api/v1';
  constructor(private http: HttpClient) { }

  //funciones para REST API practicantes//metodo para pedir pacientes al servidor
  getPracticants() {
    return this.http.get(`${this.API_URL}/practicants`);
  }

  getPracticant(id: string){

    return this.http.get(`${this.API_URL}/practicants/${id}`);

  }

  savePracticant(practicant:practicant){
    return this.http.post(`${this.API_URL}/practicants`, practicant);

  }

  deletePracticant(id: string){
    return this.http.delete(`${this.API_URL}/practicants/${id}`);

  }

  updatePracticant(id:string|number, updatepracticant:practicant):Observable<any>{

    return this.http.put(`${this.API_URL}/practicants/${id}`, updatepracticant);

  }

  loginPracticant(practicant:practicant){
    return this.http.post(`${this.API_URL}/practicants/login`, practicant);
  }
}
