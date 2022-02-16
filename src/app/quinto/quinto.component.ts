import { Component, OnInit } from '@angular/core';
import { DadosService } from './dados.service';

@Component({
  selector: 'app-quinto',
  templateUrl: './quinto.component.html',
  styleUrls: ['./quinto.component.css']
})
export class QuintoComponent implements OnInit {
  email: string[];
 senha:string[];
 endereco:string[];
 complemento:string[];
 cidade:string[];
 numero:string[];
  constructor(public dadosService:DadosService) { 
    this.email=this.dadosService.getDados(); 
    this.senha=this.dadosService.getDados();
    this.endereco=this.dadosService.getDados();
    this.complemento=this.dadosService.getDados();
    this.cidade=this.dadosService.getDados();
    this.numero=this.dadosService.getDados();

  }

  ngOnInit(): void {
  }

}
