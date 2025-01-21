import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoRegistroPage } from './producto-registro.page';

const routes: Routes = [
  {
    path: '',
    component: ProductoRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductoRegistroPageRoutingModule {}
