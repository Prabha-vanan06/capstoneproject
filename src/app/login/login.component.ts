import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginForm!:FormGroup;
  constructor(private formbuilder:FormBuilder){}
  ngOnInit():void{
  this.loginForm=this.formbuilder.group({
    username:['',[Validators.required]],
    password:['',[Validators.required]]
  });
  }
  public myError = (controlName: string, errorName: string) =>{
    return this.loginForm.controls[controlName].hasError(errorName);
  }
  

  onSubmit(){

  }
}
