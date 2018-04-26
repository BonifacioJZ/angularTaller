import { Component, OnInit } from '@angular/core';
//servicios
import { PersonajesService } from '../../services/personajes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  personajes:any=[]

  constructor(private _personajesService:PersonajesService,
              private router:Router) {
    this._personajesService.Personajes()
                          .subscribe(data=>{
                            this.personajes=data.personajes
                            console.log(this.personajes)
                          })



  }

  verPersonaje(_id){
    console.log(_id)

    this.router.navigate(['/personaje',_id])

  }



  ngOnInit() {

  }

}
