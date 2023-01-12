import { Component, Input, OnInit } from '@angular/core';
import { VegesService } from '../shared/veges.service';
import { IVeges } from './veges';

@Component({
  selector: 'app-veges',
  templateUrl: './veges.component.html',
  styleUrls: ['./veges.component.css']
})
export class VegesComponent implements OnInit {
  ngOnInit(): void {
   
  }
  @Input() vegDetails:IVeges[] = [];
  
 
  
}
