import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { IVeges } from "../veges/veges";


@Injectable({
    providedIn:'root'
})
export class InMemoryEventDbService implements InMemoryDbService{

    createDb() {
        const vegetables: IVeges[]=[
            {
            "name":"tomato",
            "category":"vegetables",
            "image":"../assets/images/tomato.jpg"
            },
            {
                "name":"Lady's finger",
                "category":"vegetables",
                "image":"../assets/images/lady.jpg"
            },
            {
                "name":"Cabbage",
                "category":"vegetables",
                "image":"../assets/images/cabbage1.jpg"
            }, 
            {
                "name":"Carrot",
                "category":"vegetables",
                "image":"../assets/images/carrot.jpg"
            },
            {
                "name":"Beans",
                "category":"vegetables",
                "image":"../assets/images/beans1.jpg"
            },
            {
                "name":"Radish",
                "category":"vegetables",
                "image":"../assets/images/radish1.jpg"
            },
            {
                "name":"Beetroot",
                "category":"vegetables",
                "image":"../assets/images/beetroot.jpg"
            },
            {
                "name":"Brinjal",
                "category":"vegetables",
                "image":"../assets/images/brinjal.jpg"
            },
        ];
        return{vegetables};
        }
    }