import { Component, OnInit } from '@angular/core';
import {LeadersService} from "../../../services/leaders/leaders.service";

@Component({
  selector: 'app-leader-list',
  templateUrl: './leader-list.component.html',
  styleUrls: ['./leader-list.component.scss']
})
export class LeaderListComponent implements OnInit {

  public leaders: any =[];

  constructor(private leaderService: LeadersService) { }

  ngOnInit(): void {
    this.leaderService.getLeaders().subscribe(datos=>this.leaders = datos);
  }

  getLeadersBy(search: string) {
    this.leaderService.getLeadersBy(search).subscribe( datos=>this.leaders = datos);
  }
}
