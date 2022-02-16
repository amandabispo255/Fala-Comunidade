import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';

import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import{AngularFireDatabase} from '@angular/fire/compat/database';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import { PrimeiroService } from './primeiro.service';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { TerceiroComponent } from './terceiro/terceiro.component';
import { AreasService } from './terceiro/areas.service';
import { QuartoComponent } from './quarto/quarto.component';
import { SegundoComponent } from './segundo/segundo.component';
import { QuintoComponent } from './quinto/quinto.component';
import { DadosService } from './quinto/dados.service';
import { NavbarComponent } from './navbar/navbar.component';




@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
    DataBindingComponent,
    TerceiroComponent,
    QuartoComponent,
    SegundoComponent,
    QuintoComponent,
    ReclamacaoComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'mytestapp'),
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
    AngularFireStorageModule // Only required for storage features
  ],
  providers: [PrimeiroService,AreasService,DadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
