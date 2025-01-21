// api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cliente } from '../models/cliente.model';
import { Producto } from '../models/producto.model';
import { Envio } from '../models/envio.model';
import { v4 as uuidv4 } from 'uuid';  // Importa la librería para generar UUID

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://y0ugpcsqp3.execute-api.us-east-1.amazonaws.com/';

  constructor(private http: HttpClient) {}

  // Método para agregar cliente
  addCliente(cliente: Cliente): Observable<any> {
    cliente.id = uuidv4();  // Genera un UUID para el cliente
    return this.http.post(`${this.apiUrl}/insertar-cliente`, cliente)
      .pipe(
        catchError(error => {
          console.error('Error al agregar cliente:', error);
          return throwError('Error al agregar cliente. Intenta de nuevo más tarde.');
        })
      );
  }

  // Método para agregar producto
  addProducto(producto: Producto): Observable<any> {
    producto.id = uuidv4();  // Genera un UUID para el producto
    return this.http.post(`${this.apiUrl}/insertar-producto`, producto)
      .pipe(
        catchError(error => {
          console.error('Error al agregar producto:', error);
          return throwError('Error al agregar producto. Intenta de nuevo más tarde.');
        })
      );
  }

  // Método para agregar envío
  addEnvio(envio: Envio): Observable<any> {
    envio.id = uuidv4();  // Genera un UUID para el envío
    return this.http.post(`${this.apiUrl}/insertar-envio`, envio)
      .pipe(
        catchError(error => {
          console.error('Error al agregar envío:', error);
          return throwError('Error al agregar envío. Intenta de nuevo más tarde.');
        })
      );
  }

  // Método para obtener productos
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}/listar-productos`)
      .pipe(
        catchError(error => {
          console.error('Error al obtener productos:', error);
          return throwError('Error al obtener productos. Intenta de nuevo más tarde.');
        })
      );
  }
}
