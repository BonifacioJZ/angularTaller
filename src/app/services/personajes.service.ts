import { Injectable } from '@angular/core';
//modulos para hacer las conusltas de datos
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable()
export class PersonajesService {

  personajesURL ="http://localhost:3000/api/personaje"


  constructor(private http:Http) {
    console.log('se acaban de iniciar los servicios')

   }
   Personajes(){
     return this.http.get(this.personajesURL)
                      .map(res=>{
                        console.log(res.json())
                        return res.json()
                      })
   }
   postPerdonajes(personaje){

     let headers = new Headers({
       'Content-Type': 'application/json'
     });
     return this.http.post(this.personajesURL,personaje,{headers})
                      .map(res=>{
                        console.log(res.json())
                        return res.json()
                      })



   }
   getPersonaje(_id){
     let url = `http://localhost:3000/api/personaje/${_id}`
     return this.http.get(url)
                .map(res=>{
                  console.log(res.json())
                  return res.json().personaje
                })

   }



}
