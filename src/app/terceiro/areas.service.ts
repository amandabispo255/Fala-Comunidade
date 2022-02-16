import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  constructor() { }



  getAreas(){

return['Limpeza Urbana','Gestão Pública','Defesa Civil','Iluminação','Obras'];



  }
}
