import { Component, OnInit } from '@angular/core';
import {PokemonsService} from "../../../services/pokemons/pokemons.service";
import {Router, ActivatedRoute} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemon: any = {
    name: '',
    type1: '',
    type2: '',
    maxCP: 0,
    maxHP: 0,
    urlImg: ''
  };

  edit: boolean=false;
  public pokemons: any =[];

  constructor(private pokemonService: PokemonsService, private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe(datos=>this.pokemons = datos);
    const params = this.activatedRoute.snapshot.params;
    if(params){
      this.pokemonService.getPokemon(params['id']).subscribe(res=>{
        console.log(res);
        this.pokemon = res;
        this.edit=true;
      })
    }
  }

  submitPokemon() {
    this.pokemonService.addPokemon(this.pokemon).subscribe(res => {
      this.pokemonService.getPokemons().subscribe(datos=>this.pokemons = datos);
    }, err => console.log(err));
  }
  deletePokemon(id: string): void{
    this.pokemonService.deletePokemon(id).subscribe(res=>{
      this.pokemonService.getPokemons().subscribe(datos=>this.pokemons = datos);
    }, err=>console.log(err));
  }
  updatePokemon() {
    delete this.pokemon.crearedAt;
    this.pokemonService.updatePokemon(this.pokemon.id, this.pokemon).subscribe(res=>{
      this.pokemonService.getPokemons().subscribe(datos=>this.pokemons = datos);
    })
  }
  onLogOut(): void {
    this.cookieService.delete("token");
    this.router.navigate(['/'])
  }
}
