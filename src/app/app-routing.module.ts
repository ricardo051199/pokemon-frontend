import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GymListComponent} from "./components/global/gym-list/gym-list.component";
import {PokemonListComponent} from "./components/global/pokemon-list/pokemon-list.component";
import {LeaderListComponent} from "./components/global/leader-list/leader-list.component";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  { path: '', redirectTo: 'pokemon', pathMatch: 'full' },
  { path: 'pokemon', component: HomepageComponent},
  { path: 'pokemon/login', component: LoginComponent },
  { path: 'pokemon/gyms', component: GymListComponent },
  { path: 'pokemon/leaders', component: LeaderListComponent },
  { path: 'pokemon/pokemons', component: PokemonListComponent },
  { path: '**', redirectTo: 'pokemon', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
