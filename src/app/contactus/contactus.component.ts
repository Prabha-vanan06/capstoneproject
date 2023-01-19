import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  contactForm!:FormGroup;
  pageTitle:string="contact us";
  constructor(private formBuilder:FormBuilder){}

  ngOnInit():void{
    this.contactForm=this.formBuilder.group({
      fname:[],
      lname:[],
      email:[],
      shop:[],
      commands:[],
    })
  }
  onSubmit(){
    console.log(this.contactForm.value);
    alert(JSON.stringify(this.contactForm.value));
  }
}
