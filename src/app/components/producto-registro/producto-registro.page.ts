import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-producto-registro',
  templateUrl: './producto-registro.page.html',
  styleUrls: ['./producto-registro.page.scss'],
  standalone: true  // Agregar esta propiedad si no está presente
})
export class ProductoRegistroPage {
  producto: Producto = {
    id: '',
    nombre: '',
    precio: 0,
    categoria: '',
  };

  constructor(private apiService: ApiService) {}

  onSubmit() {
    this.apiService.addProducto(this.producto).subscribe({
      next: (response) => {
        console.log('Producto registrado con éxito:', response);
        alert('Producto registrado con éxito');
        this.resetForm();
      },
      error: (error) => {
        console.error('Error al registrar el producto:', error);
        alert('Error al registrar el producto. Intenta de nuevo.');
      },
    });
  }

  private resetForm() {
    this.producto = {
      id: '',
      nombre: '',
      precio: 0,
      categoria: '',
    };
  }
}
