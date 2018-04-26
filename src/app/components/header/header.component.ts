import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hola-mundo',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 nombre = `juan`
}
