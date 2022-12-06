import { Component, OnInit } from '@angular/core';
import {PokemonsService} from "../../../services/pokemons/pokemons.service";
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from "rxjs";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  public pokemons: any =[];
  public pokemonsFire: any =[];

  constructor(private pokemonService: PokemonsService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonsBy('Fire').subscribe(datos=>this.pokemonsFire=datos);
    this.pokemonService.getPokemons().subscribe(datos=>this.pokemons = datos);
  }

  getPokemonsBy(search: string) {
    console.log(search);
    this.pokemonService.getPokemonsBy(search).subscribe( datos=>this.pokemons = datos);
  }
}
