import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoProductosPage } from './listado-productos.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoProductosPage, // Importar standalone
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoProductosPageRoutingModule {}
