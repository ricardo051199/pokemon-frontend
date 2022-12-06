import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PokemonsService {
    url_server: string = '/api/pokemons';

    constructor(private http: HttpClient) { }


    getPokemons(): Observable<any>{
        return this.http.get(this.url_server);
    }

    getPokemonsBy(search: string): Observable<any[]>{
        return this.http.get<any[]>(`${this.url_server}/search/${search}`);
    }

    addPokemon(pokemon: any): Observable<any>{
        return this.http.post<any>(this.url_server, pokemon);
    }

    deletePokemon(id: string): Observable<any>{
        return this.http.delete<any>(`${this.url_server}/${id}`);
    }
    getPokemon(id: string): Observable<any>{
        return this.http.get(`${this.url_server}/${id}`);
    }
    updatePokemon(id: string, pokemon: any): Observable<any>{
        return this.http.patch<any>(this.url_server, pokemon);
    }
}
