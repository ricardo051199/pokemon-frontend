import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GymListComponent } from './components/global/gym-list/gym-list.component';
import { LeaderListComponent } from './components/global/leader-list/leader-list.component';
import { PokemonListComponent } from './components/global/pokemon-list/pokemon-list.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { PokemonComponent } from './components/privileged/pokemon/pokemon.component';
import { GymComponent } from './components/privileged/gym/gym.component';
import { LeaderComponent } from './components/privileged/leader/leader.component';

@NgModule({
  declarations: [
    AppComponent,
    GymListComponent,
    LeaderListComponent,
    PokemonListComponent,
    HomepageComponent,
    LoginComponent,
    PokemonComponent,
    GymComponent,
    LeaderComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
