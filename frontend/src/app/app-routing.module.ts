import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PatientListComponent} from './components/patient-list/patient-list.component';
import {PatientFormComponent} from './components/patient-form/patient-form.component';
import { HomeComponent } from './components/home/home.component';
import { PracticantLoginComponent } from './components/practicant-login/practicant-login.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'patients',
    component: PatientListComponent
  },
  {
    path: 'patients/add',
    component: PatientFormComponent
  },
  {
    path: 'patient/edit/:id',
    component: PatientFormComponent
  },
  {
    path: 'practicant/login',
    component: PracticantLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
