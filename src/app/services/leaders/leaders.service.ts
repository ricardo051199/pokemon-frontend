import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LeadersService {
    url_server: string = '/api/leaders';

    constructor(private http: HttpClient) { }


    getLeaders(): Observable<any>{
        return this.http.get(this.url_server);
    }

    getLeadersBy(search: string): Observable<any[]>{
        return this.http.get<any[]>(`${this.url_server}/search/${search}`);
    }

    addLeader(leader: any): Observable<any>{
        return this.http.post<any>(this.url_server, leader);
    }

    deleteLeader(id: string): Observable<any>{
        return this.http.delete<any>(`${this.url_server}/${id}`);
    }
}
