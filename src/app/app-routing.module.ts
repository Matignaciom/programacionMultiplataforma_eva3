import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cliente-registro',
    loadChildren: () => import('./components/cliente-registro/cliente-registro.module').then( m => m.ClienteRegistroPageModule)
  },
  {
    path: 'producto-registro',
    loadChildren: () => import('./components/producto-registro/producto-registro.module').then( m => m.ProductoRegistroPageModule)
  },
  {
    path: 'envio-registro',
    loadChildren: () => import('./components/envio-registro/envio-registro.module').then( m => m.EnvioRegistroPageModule)
  },
  {
    path: 'listado-productos',
    loadChildren: () => import('./components/listado-productos/listado-productos.module').then( m => m.ListadoProductosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
