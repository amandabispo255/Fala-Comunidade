import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrimeiroService {
 /*OBS: a injeção de dependência(INJECTABLE) diz que a class primeiro service pode ser INJETADA EM OUTRA
 CLASSE para que o uso dela possa ser feito. Sendo está injeição feita via construtor do componente.
*/
  /*quando vamos fazer listagem de dados nós criamos um serviço/ devemos separar essas informações e
  forma de obtê-las, da area do componente pq lá fica somente a parte que interage  com o usuario. 
  O serviço ele faz uma simulação de um back end.
  O componente ele vai precisar de uma informação para mostrar na tela, como por exemplo a lista de alunos
  O serviço é responsável por fazer essa comunicação com o servidor e o servidor pode ser em node, java
  dotenet, ruby, painton.
  
É importante após injetar a classe no construtor do componente, e chamar o serviço(this....)
a gente precisa falar com o angular que ele tem que fornecer essa classe(através do providers) no
modulo do componente
providers:[o nome do serviço letras iniciais maisculas] e importar emcima import {nomservico} from 
'./nome service';
*/


getLocalidades(){
  //Futuramente iremos substituir a linha abaixo com a informação que será obtida do backend.
      return ['Localidade afetada', 'Rua 2 de Julho','Travessa da Caixa Dagua','Rua nova Santo Amaro', 'Rua A','Rua Alto do São Francisco', 'Avenidade Garcia','Rua General Argolo','Rua Nestor de Oliveira'];
    }

  constructor() { }
}
