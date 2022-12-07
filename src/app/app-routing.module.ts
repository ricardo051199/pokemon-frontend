import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GymListComponent} from "./components/global/gym-list/gym-list.component";
import {PokemonListComponent} from "./components/global/pokemon-list/pokemon-list.component";
import {LeaderListComponent} from "./components/global/leader-list/leader-list.component";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {LoginComponent} from "./components/login/login.component";
import { GymsService } from './services/gyms/gyms.service';
import { LeadersService } from './services/leaders/leaders.service';
import {PokemonComponent} from "./components/privileged/pokemon/pokemon.component";
import {GymComponent} from "./components/privileged/gym/gym.component";
import {LeaderComponent} from "./components/privileged/leader/leader.component";
import { AuthService } from './services/auth/auth.service';
import { TokenService } from './services/token/token.service';
import {GuardGuard} from "./jwt/guard.guard";

const routes: Routes = [
  { path: '', redirectTo: 'pokemon', pathMatch: 'full' },
  { path: 'pokemon', component: HomepageComponent},
  { path: 'pokemon/login', component: LoginComponent },
  { path: 'pokemon/gyms', component: GymListComponent },
  { path: 'pokemon/leaders', component: LeaderListComponent },
  { path: 'pokemon/pokemons', component: PokemonListComponent },
  { path: 'pokemon/pokemons/:search', component: PokemonListComponent },

  { path: 'pokemon/admin/pokemon', component: PokemonComponent, canActivate: [GuardGuard] },
  { path: 'pokemon/admin/pokemon/:id', component: PokemonComponent, canActivate: [GuardGuard] },


  { path: 'pokemon/admin/leader', component: LeaderComponent, canActivate: [GuardGuard] },
  { path: 'pokemon/admin/leader/:id', component: LeaderComponent, canActivate: [GuardGuard] },


  { path: 'pokemon/admin/gym', component: GymComponent, canActivate: [GuardGuard],},
  { path: 'pokemon/admin/gym/:id', component: GymComponent, canActivate: [GuardGuard] },



  { path: '**', redirectTo: 'pokemon', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [GymsService, LeadersService, AuthService, TokenService],
})
export class AppRoutingModule { }
