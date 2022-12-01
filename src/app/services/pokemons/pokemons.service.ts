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
}
