import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { ListarTipoEvaComponent } from './components/tipo_eva/listar-tipo-eva/listar-tipo-eva.component';
import { AddTipoEvaComponent } from './components/tipo_eva/add-tipo-eva/add-tipo-eva.component';
import { UpdateTipoEvaComponent } from './components/tipo_eva/update-tipo-eva/update-tipo-eva.component';
import { TipoEvaService } from './services/tipo-eva.service';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {from} from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    ListarTipoEvaComponent,
    AddTipoEvaComponent,
    UpdateTipoEvaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule ,
    MatButtonModule ,
    HttpClientModule,
    MatTableModule
  ],
  providers: [
    TipoEvaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
