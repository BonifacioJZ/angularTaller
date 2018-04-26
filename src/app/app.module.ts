//modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'


//services
import { PersonajesService } from './services/personajes.service';

//routes
import { app_routing } from './app.routes';

//componetes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AddPersonajeComponent } from './components/add-personaje/add-personaje.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { HeaderComponent } from './components/header/header.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddPersonajeComponent,
    PersonajesComponent,
    PersonajeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpModule,
    HttpClientModule,
    FormsModule



  ],
  providers: [
    PersonajesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
