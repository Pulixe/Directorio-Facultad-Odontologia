import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PatientFormComponent } from './components/patient-form/patient-form.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';

import { PatientsService} from './services/patients.service';
import { HomeComponent } from './components/home/home.component';
import { PracticantLoginComponent } from './components/practicant-login/practicant-login.component';
import { PracticantBiogComponent } from './components/practicant-biog/practicant-biog.component';
import { PracticantService } from './services/practicant.service';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PatientFormComponent,
    PatientListComponent,
    HomeComponent,
    PracticantLoginComponent,
    PracticantBiogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PatientsService,
    PracticantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
