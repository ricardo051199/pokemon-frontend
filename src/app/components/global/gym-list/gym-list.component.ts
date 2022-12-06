import { Component, OnInit } from '@angular/core';
import {GymsService} from "../../../services/gyms/gyms.service";

@Component({
  selector: 'app-gym-list',
  templateUrl: './gym-list.component.html',
  styleUrls: ['./gym-list.component.scss']
})
export class GymListComponent implements OnInit {

  public gyms: any =[];

  constructor(private gymService: GymsService) { }

  ngOnInit(): void {
    this.gymService.getGyms().subscribe(datos=>this.gyms = datos);
  }

  getGymsBy(search: string) {
    this.gymService.getGymsBy(search).subscribe( datos=>this.gyms = datos);
  }
}
