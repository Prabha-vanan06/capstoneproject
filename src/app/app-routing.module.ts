import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { VegesDetailsComponent } from './veges/veges-details.component';
import { VegesComponent } from './veges/veges.component';

const routes: Routes = [
  {
    path:'app-home',component:HomeComponent
  },
  {
    path:'vegesdetails',component:VegesDetailsComponent
  },
  {
    path:'app-aboutus',component:AboutusComponent
  },
  {
    path:'app-contactus',component:ContactusComponent
  },
  {
    path:'app-login',component:LoginComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
