import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {TokenService} from "../../services/token/token.service";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: any = {
    username: '',
    password: ''
  }
  errMsj: string = '';

  constructor(private authService: AuthService, private tokenService: TokenService, private router: Router, private cookiesService: CookieService) { }


  ngOnInit() {
  }

  onLogin(username: string, password: string) {
    const dateNow = new Date();
      this.authService.login({username:username,password:password}).subscribe(data=>{
        this.cookiesService.set('token', data.access_token, dateNow.setMinutes(dateNow.getMinutes()+10));
        this.router.navigate(['/pokemon/admin/gym']);
      },
      err=>{
        this.errMsj = err.error.message;
      });
  }
}