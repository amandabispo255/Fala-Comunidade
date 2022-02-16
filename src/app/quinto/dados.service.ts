import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  

  getDados(){
    return ['amandavitoriaav.158@gmail.com', '*********','Rua da gota','Proximo a ','Santo Amaro','18'];


  }
  constructor() { }
}
