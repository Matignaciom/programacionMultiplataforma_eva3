import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnvioRegistroPageRoutingModule } from './envio-registro-routing.module';

import { EnvioRegistroPage } from './envio-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnvioRegistroPageRoutingModule
  ],
  declarations: [EnvioRegistroPage]
})
export class EnvioRegistroPageModule {}
