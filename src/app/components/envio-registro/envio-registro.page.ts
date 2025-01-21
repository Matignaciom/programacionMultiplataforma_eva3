import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Envio } from '../../models/envio.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-envio-registro',
  templateUrl: './envio-registro.page.html',
  styleUrls: ['./envio-registro.page.scss'],
})
export class EnvioRegistroPage {
  envio: Envio = {
    id: '',
    direccion: '',
    fechaEnvio: '',
  };

  constructor(private apiService: ApiService, private router: Router) {}

  agregarEnvio() {
    this.apiService.addEnvio(this.envio).subscribe(
      (response) => {
        console.log('Envío agregado exitosamente', response);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Error al agregar envío', error);
      }
    );
  }
}
