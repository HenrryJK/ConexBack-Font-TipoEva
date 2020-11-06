import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarTipoEvaComponent } from './components/tipo_eva/listar-tipo-eva/listar-tipo-eva.component';
import { UpdateTipoEvaComponent } from './components/tipo_eva/update-tipo-eva/update-tipo-eva.component';
import { AddTipoEvaComponent } from './components/tipo_eva/add-tipo-eva/add-tipo-eva.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  { path: 'listar', component: ListarTipoEvaComponent},
  { path: "tipoeva/add", component: AddTipoEvaComponent },
  { path: "editar/:id", component: UpdateTipoEvaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
