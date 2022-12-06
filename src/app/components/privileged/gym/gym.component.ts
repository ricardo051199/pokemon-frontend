import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GymsService} from "../../../services/gyms/gyms.service";

@Component({
  selector: 'app-gym',
  templateUrl: './gym.component.html',
  styleUrls: ['./gym.component.scss']
})
export class GymComponent implements OnInit {

  gym: any = {
    name: '',
    lema: '',
    location: '',
    region: '',
    type: '',
    urlImgGym: '',
    urlImgMedal: ''
  };

  public gyms: any =[];
  edit: boolean=false;

  constructor(private gymService: GymsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.gymService.getGyms().subscribe(datos=>this.gyms = datos);
    const params = this.activatedRoute.snapshot.params;
    if(params){
      this.gymService.getGym(params['id']).subscribe(res=>{
        console.log(res);
        this.gym = res;
        this.edit=true;
      })
    }
  }

  submitGym() {
    this.gymService.addGym(this.gym).subscribe(res => {
      this.gymService.getGyms().subscribe(datos=>this.gyms = datos);
    }, err => console.log(err));
  }
  deleteGym(id: string): void{
    this.gymService.deleteGym(id).subscribe(res=>{
      this.gymService.getGyms().subscribe(datos=>this.gyms = datos);
    }, err=>console.log(err));
  }

  updateGym() {
    delete this.gym.crearedAt;
    this.gymService.updateGym(this.gym.id, this.gym).subscribe(res=>{
      this.gymService.getGyms().subscribe(datos=>this.gyms = datos);
    })
  }
}
