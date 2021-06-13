import { Component, HostBinding, OnInit } from '@angular/core';
import { PatientsService} from '../../services/patients.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  //esta linea hace que las cartas se muestren de forma horizontal crando una fila a todo el componente patient-list
  @HostBinding('class') classes = 'row';
  patients: any= []
  constructor(private patientsService: PatientsService) {  }
  
  ngOnInit(): void {
   this.getPatients();
  }

  getPatients(){
    this.patientsService.getPatients().subscribe(
      res => {
        this.patients = res;
      },
      err =>{
        console.log(err);
      } 
    );
  }

  //funcion de eliminar datos de la base de datos. a la cual se necesitaria un boton en la maqueta html
  deletePatient(id: string){
    this.patientsService.deletePatient(id).subscribe(
      res => {
        this.patients = res
        this.getPatients();
        alert("Eliminado");
      },
      err => {
        console.log(err);
      }
    )
  }

  //funcion d editar esta en el routerLink patient-List.

}
