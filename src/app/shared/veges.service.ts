import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, Observable, tap, throwError } from "rxjs";
import { IVeges } from "../veges/veges";


@Injectable({
    providedIn:'root'
})
export class VegesService{
    

    public url="api/vegetables";
    veges:IVeges[]=[];



    constructor(private http:HttpClient){}
        getVegetables():Observable<IVeges[]>{
            return this.http.get<IVeges[]>(this.url);
    }
    
}