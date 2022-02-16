import { Component, OnInit } from '@angular/core';
  import { AreasService } from './areas.service';
@Component({
  selector: 'app-terceiro',
  templateUrl: './terceiro.component.html',
  styleUrls: ['./terceiro.component.css']
})
export class TerceiroComponent implements OnInit {
areas:string[];




  constructor(public areasService:AreasService) { 
var servico=new AreasService();

this.areas=this.areasService.getAreas();

  }

  ngOnInit(): void {
  }

}
