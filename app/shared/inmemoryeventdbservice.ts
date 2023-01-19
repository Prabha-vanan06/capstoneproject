import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";

import { Login } from "../login/login";
import { IVeges } from "../veges/veges";


@Injectable({
    providedIn:'root'
})
export class InMemoryEventDbService implements InMemoryDbService{

    createDb() {
        /* const cart:Cart[]=[
            {
            "name":'tomato',
            "category":'vegetables',
            "image":'../assets/images/tomato.jpg',
            "price":200,
            "kg":0,
            },
            {
                
                "name":"Lady's finger",
                "category":"vegetables",
                "image":"../assets/images/lady.jpg",
                "price":100,
                "kg":0,
            },
            {
                
                "name":"Cabbage",
                "category":"vegetables",
                "image":"../assets/images/cabbage1.jpg",
                "price":60,
                "kg":0,
            }, 
            {
                
                "name":"Carrot",
                "category":"vegetables",
                "image":"../assets/images/carrot.jpg",
                "price":75,
                "kg":0,
            },
            {
                
                "name":"Beans",
                "category":"vegetables",
                "image":"../assets/images/beans1.jpg",
                "price":60,
                "kg":0,
            },
            {
                
                "name":"Radish",
                "category":"vegetables",
                "image":"../assets/images/radish1.jpg",
                "price":50,
                "kg":0,
            },
            {
                
                "name":"Beetroot",
                "category":"vegetables",
                "image":"../assets/images/beetroot.jpg",
                "price":80,
                "kg":0,
            },
            {
                
                "name":"Brinjal",
                "category":"vegetables",
                "image":"../assets/images/brinjal.jpg",
                "price":90,
                "kg":0,
            },

        ] */
        const users:Login[]=[
            {
                "id":1,
                "username":'prabha',
                "password":'prabha',
                "isAdmin":true
            },
            {
               "id":2,
               "username":'user1',
               "password":'user1',
               "isAdmin":false
            },
            {
                "id":3,
                "username":'user2',
                "password":'user2',
                "isAdmin":false
            }
        ]
        const veges: IVeges[]=[
            {
            "id":1,
            "name":"tomato",
            "category":"vegetables",
            "image":"../assets/images/tomato.jpg",
            "description":"This is tomato",
                "quantity":"50kg",
                "price":200,
                "kg":1,
            },
            {
                "id":2,
                "name":"Lady's finger",
                "category":"vegetables",
                "image":"../assets/images/lady.jpg",
                "description":"This is lady's finger",
                "quantity":"700kg",
                "price":100,
                "kg":1,
            },
            {
                "id":3,
                "name":"Cabbage",
                "category":"vegetables",
                "image":"../assets/images/cabbage1.jpg",
                "description":"This is cabbage",
                "quantity":"20kg",
                "price":60,
                "kg":1,
            }, 
            {
                "id":4,
                "name":"Carrot",
                "category":"vegetables",
                "image":"../assets/images/carrot.jpg",
                "description":"This is carrot",
                "quantity":"40kg",
                "price":75,
                "kg":1,
            },
            {
                "id":5,
                "name":"Beans",
                "category":"vegetables",
                "image":"../assets/images/beans1.jpg",
                "description":"This is beans",
                "quantity":"50kg",
                "price":60,
                "kg":1,
            },
            {
                "id":6,
                "name":"Radish",
                "category":"vegetables",
                "image":"../assets/images/radish1.jpg",
                "description":"This is radish",
                "quantity":"80kg",
                "price":50,
                "kg":1,
            },
            {
                "id":7,
                "name":"Beetroot",
                "category":"vegetables",
                "image":"../assets/images/beetroot.jpg",
                "description":"This is beetroot",
                "quantity":"70kg",
                "price":80,
                "kg":1,
            },
            {
                "id":8,
                "name":"Brinjal",
                "category":"vegetables",
                "image":"../assets/images/brinjal.jpg",
                "description":"This is brinjal",
                "quantity":"40kg",
                "price":90,
                "kg":1,
            },
        ];
        return{veges,users};
        }
    }