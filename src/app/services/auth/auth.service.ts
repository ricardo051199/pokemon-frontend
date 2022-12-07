import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    url_server: string = '/api/auth';

    constructor(private http: HttpClient) {
    }
    login(user: any){
        return this.http.post<any>(this.url_server, user);
    }
}
