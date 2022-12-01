import { Component, OnInit } from '@angular/core';
import {PokemonsService} from "../../../services/pokemons/pokemons.service";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  public pokemons: any =[];

  constructor(private pokemonService: PokemonsService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe(datos=>this.pokemons = datos);
  }
}
