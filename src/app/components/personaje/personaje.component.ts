import { Component, OnInit } from '@angular/core';
//importaciones
import { ActivatedRoute, Router } from '@angular/router';
import { PersonajesService } from '../../services/personajes.service';



@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {
  personaje:any={};
  constructor(private activedRoute:ActivatedRoute,
              private _personajesService:PersonajesService,
              private router:Router) {
                this.activedRoute.params.subscribe(params =>{
                   this._personajesService.getPersonaje(params['id'])
                      .subscribe(data=>{
                        this.personaje=data
                      })
                })
              }

  ngOnInit() {
  }
  regresar(){
    this.router.navigate(['personajes'])

  }
}
