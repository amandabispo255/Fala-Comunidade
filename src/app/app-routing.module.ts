import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import { QuartoComponent } from './quarto/quarto.component';
import { TerceiroComponent } from './terceiro/terceiro.component';
import { SegundoComponent } from './segundo/segundo.component';
import { QuintoComponent } from './quinto/quinto.component';
const routes: Routes = [
  {path :'primeiro', component:PrimeiroComponent},
  {path :'terceiro', component:TerceiroComponent},
  {path:'quarto', component:QuartoComponent},
  {path:'segundo',component:SegundoComponent},
  {path:'quinto',component:QuintoComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
