import { Injectable } from '@angular/core';
import {TokenService} from "../token/token.service";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class GuardService {
    constructor(
        private tokenService: TokenService,
        private router: Router
    ) { }

    canActivate(): boolean {
        if (!this.tokenService.getToken()) {
            this.router.navigate(['/pokemon/login']);
            return false;
        }
        return true;
    }
}
