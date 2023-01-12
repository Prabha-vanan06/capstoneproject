import { Component } from '@angular/core';
import { VegesService } from '../shared/veges.service';
import { IVeges } from './veges';

@Component({
  selector: 'vegesdetails',
  templateUrl: './veges-details.component.html',
  styleUrls: ['./veges-details.component.css']
})
export class VegesDetailsComponent {
  veges:IVeges[]=[];
  errorMsg:string='';
  selectedVeg!: IVeges | null;
  constructor( private vegService:VegesService){}

  ngOnInit(): void {
    this.vegService.getVegetables().subscribe(
    (response)=>{
     
      this.veges = response;
      console.log(this.veges);

      
    },
    err=>{this.errorMsg=err;
    console.log(err);
    }
    );
    // this.vegService.selectedVegChanges$.subscribe(currentVeg=>this.selectedVeg=currentVeg);
  }
}
