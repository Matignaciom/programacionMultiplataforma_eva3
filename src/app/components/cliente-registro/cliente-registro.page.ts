import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-cliente-registro',
  templateUrl: './cliente-registro.page.html',
  styleUrls: ['./cliente-registro.page.scss'],
})
export class ClienteRegistroPage {
  cliente: Cliente = { id: '', nombre: '', email: '' };

  constructor(private apiService: ApiService) {}

  onSubmit() {
    this.apiService.addCliente(this.cliente).subscribe(
      (response) => {
        console.log('Cliente registrado:', response);
      },
      (error) => {
        console.error('Error al registrar cliente:', error);
      }
    );
  }
}
