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
}