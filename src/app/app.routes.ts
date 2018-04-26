import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddPersonajeComponent } from './components/add-personaje/add-personaje.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { HeaderComponent } from './components/header/header.component';





const app_routes: Routes = [
  {path:'header',component:HeaderComponent},
  { path: 'home', component: HomeComponent },
  { path:'agregar',component:AddPersonajeComponent},
  { path:'personajes',component:PersonajesComponent},
  {path:'personaje/:id',component:PersonajeComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'header' }

];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true });
