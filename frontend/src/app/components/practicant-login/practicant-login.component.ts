import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {practicant} from '../../models/practicant';
import {PracticantService} from '../../services/practicant.service';

@Component({
  selector: 'app-practicant-login',
  templateUrl: './practicant-login.component.html',
  styleUrls: ['./practicant-login.component.css']
})
export class PracticantLoginComponent implements OnInit {

  practicant: practicant = {
    id: 0,
    name: "",
    phone: "",
    email: "",
    about:"",
    dentallt: "",
    created_aat: new Date(),
    password:""
  }

  constructor(private practicantService:PracticantService, private route:Router) { }

  ngOnInit(): void {
  }

  loginPracticant() 
  {
    delete this.practicant.id;
    delete this.practicant.created_aat;
    this.practicantService.loginPracticant(this.practicant).subscribe(
      res => {
        if(res['respon'] == 'OK'){
         
          this.route.navigate(['/patients']);
          alert("Bienvenido "+res['name'])
        }else if (res['respon'] == 'NOT OK'){
          alert('Usuario O Contrasña Invalidos')
        }
      }    
    );
  }
}
