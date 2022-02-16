
import { Component } from '@angular/core';
import {PrimeiroComponent} from './primeiro/primeiro.component';
import{PrimeiroService} from './primeiro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   
})
export class AppComponent {
  localidades: string[]; //importamos a classe do service
    
  title = 'Olá Comunidade!!!ng ';

  constructor(public primeiroService:PrimeiroService) { //injetamos no construtor
 this.localidades=this.primeiroService.getLocalidades(); 

}
}