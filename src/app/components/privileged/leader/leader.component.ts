import { Component, OnInit } from '@angular/core';
import {PokemonsService} from "../../../services/pokemons/pokemons.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LeadersService} from "../../../services/leaders/leaders.service";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-leader',
  templateUrl: './leader.component.html',
  styleUrls: ['./leader.component.scss']
})
export class LeaderComponent implements OnInit {

  leader: any = {
    name: '',
    gender: '',
    years: 0,
    home: '',
    urlImgProfile: '',
    pokemonId: 2,
    gymId: 4
  };

  public leaders: any =[];

  constructor(private leaderService: LeadersService, private router: Router, private activatedRoute: ActivatedRoute, private  cookieService: CookieService) { }

  ngOnInit(): void {
    this.leaderService.getLeaders().subscribe(datos=>this.leaders = datos);
  }

  submitLeader() {
    this.leaderService.addLeader(this.leader).subscribe(res => {
      this.leaderService.getLeaders().subscribe(datos=>this.leaders = datos);
    }, err => console.log(err));
  }
  deleteLeader(id: string): void{
    this.leaderService.deleteLeader(id).subscribe(res=>{
      this.leaderService.getLeaders().subscribe(datos=>this.leaders = datos);
    }, err=>console.log(err));
  }
  onLogOut(): void {
    this.cookieService.delete("token");
    this.router.navigate(['/'])
  }
}
