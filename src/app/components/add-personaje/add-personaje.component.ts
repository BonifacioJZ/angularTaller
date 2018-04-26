import { Component, OnInit } from '@angular/core';
//importaciones
import { PersonajesService } from '../../services/personajes.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-personaje',
  templateUrl: './add-personaje.component.html',
  styleUrls: ['./add-personaje.component.css']
})
export class AddPersonajeComponent implements OnInit {
  per:any=[]
  constructor(private _personaServise:PersonajesService,
              private router:Router) { }

  ngOnInit() {
  }

  guardar(){
    let persona ={
      name:this.per.name,
      alias:this.per.alias,
      informacion:this.per.informacion,
      imagen:this.per.imagen,
      saga:this.per.saga

    }
    console.log(persona)

    this._personaServise.postPerdonajes(persona)
                        .subscribe(data=>{
                          this.router.navigate(['personajes'])
                        })

  }

}
