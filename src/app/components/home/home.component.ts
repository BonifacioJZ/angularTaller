import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  mostrar: boolean = false

  frase = {
    mensaje: `si funciona no le muevas`,
    autor: `un ingeniero `
  }

  personajes: string[] = ["Spiderman", "venom", "Dr Octopus"]

}
