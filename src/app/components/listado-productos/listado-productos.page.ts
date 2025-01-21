import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiService } from 'src/app/service/api.service';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-listado-productos',
  standalone: true, // Componente standalone
  imports: [CommonModule, FormsModule, IonicModule],
  templateUrl: './listado-productos.page.html',
  styleUrls: ['./listado-productos.page.scss'],
})
export class ListadoProductosPage implements OnInit {
  productos: Producto[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.apiService.getProductos().subscribe({
      next: (data: Producto[]) => {
        this.productos = data;
      },
      error: (err) => {
        console.error('Error al obtener productos:', err);
      },
    });
  }
}
