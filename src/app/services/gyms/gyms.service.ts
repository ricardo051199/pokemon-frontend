import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GymsService {
    url_server: string = '/api/gyms';

    constructor(private http: HttpClient) { }

    getGyms(): Observable<any>{
        return this.http.get(this.url_server);
    }

    getGymsBy(search: string): Observable<any[]>{
        return this.http.get<any[]>(`${this.url_server}/search//${search}`);
    }
    addGym(pokemon: any): Observable<any>{
        return this.http.post<any>(this.url_server, pokemon);
    }

    deleteGym(id: string): Observable<any>{
        return this.http.delete<any>(`${this.url_server}/${id}`);
    }

    getGym(id: string): Observable<any> {
        return this.http.get(`${this.url_server}/${id}`);
    }

    updateGym(id: string,  gym: any): Observable<any>{
        return this.http.patch<any>(`${this.url_server}/${id}`, gym);
    }
}