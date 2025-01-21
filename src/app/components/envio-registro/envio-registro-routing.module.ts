import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnvioRegistroPage } from './envio-registro.page';

const routes: Routes = [
  {
    path: '',
    component: EnvioRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnvioRegistroPageRoutingModule {}
