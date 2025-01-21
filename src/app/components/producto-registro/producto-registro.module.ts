import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

// Importa el componente sin declararlo
import { ProductoRegistroPage } from './producto-registro.page';

import { ProductoRegistroPageRoutingModule } from './producto-registro-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoRegistroPageRoutingModule
  ],
  // Elimina esta línea de declaración
  // declarations: [ProductoRegistroPage] 
  exports: [ProductoRegistroPage] // Exporta si es necesario
})
export class ProductoRegistroPageModule {}
