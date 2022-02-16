import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string='http://loiane.com';
  cursoAngular: boolean= true;
  urlImagem='https://upload.wikimedia.org/wikipedia/commons/f/f2/Bras%C3%A3o_de_Santo_Amaro.jpg'
  getValor(){
  return 1;

  }
  getCurtirCurso(){
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
