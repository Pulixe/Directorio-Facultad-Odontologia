import { Component, HostBinding, OnInit } from '@angular/core';
import { patient } from 'src/app/models/patient';
import {PatientsService} from '../../services/patients.service';
import {ActivatedRoute, Router} from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  patient: patient = {
    id: 0,
    name: "",
    phone: "",
    email: "",
    dentalt: "",
    created_At: new Date()
  }

  edit: boolean = false;

  constructor(private patientService:PatientsService, private route:Router, private active: ActivatedRoute) { }

  ngOnInit(): void {

    //validacion de la ruta para editar vs la de agregar edit vs add
    const params = this.active.snapshot.params;//obtenemos los parametros del paciente a actalizar
    if (params.id){
      this.patientService.getPatient(params.id).subscribe(
        res => {
         // this.patient = res;
          this.edit = true;
        },
        err => {

        }
      )
    }
  }
  
  savePatient(){
    delete this.patient.id;
    delete this.patient.created_At;

    this.patientService.savePatient(this.patient).subscribe(
      res => {
        //redirecciona la pagina central
        this.route.navigate(['/']);
        alert("Usted a sido registrado como posible paciente de atención, espere a que se contacten con usted!")
      },
      err => {
        console.log(err);
      }
    )
  }

  //funcion para actualizar/editar paciente
  updatePatient() {
    delete this.patient.created_At;
    this.patientService.updatePatient(this.patient.id, this.patient).subscribe(
      res => {
        console.log(res)
        this.route.navigate(['/'])
      },
      err => {
        console.log(err)
      }
    )

    
  }

}
