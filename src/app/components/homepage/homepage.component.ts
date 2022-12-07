import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
  }

  submitLog() {
    if(this.cookieService.check('token')){
      this.router.navigate(['/pokemon/admin/gym']);
    }else{
      this.router.navigate(['/pokemon/login']);
    }
  }
}
