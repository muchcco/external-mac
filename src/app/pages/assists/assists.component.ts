import { Component } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { ApiService } from '../../_service/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-assists',
  templateUrl: './assists.component.html',
  styleUrl: './assists.component.css'
})
export class AssistsComponent {

  numeroDocumento: string = '';
  horaActual: string = '';
  fechaActual: string = '';

  constructor(@Inject(PLATFORM_ID) private platformId: any, private assistsServie: ApiService) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.actualizarHoraFecha();
      setInterval(() => {
        this.actualizarHoraFecha();
      }, 1000);
    }
  }

  agregarNumero(numero: string): void {
    if (this.numeroDocumento.length < 10) {  // Ajusta el límite según la longitud de tu documento
      this.numeroDocumento += numero;
    }
  }

  borrarNumero(): void {
    this.numeroDocumento = this.numeroDocumento.slice(0, -1);
  }

  limpiarNumero(): void {
    this.numeroDocumento = '';
  }

  registrarAsistencia(): void {
    if (this.numeroDocumento && this.horaActual && this.fechaActual) {
      // Lógica para registrar la asistencia
      console.log('Asistencia registrada para el documento:', this.numeroDocumento);
      console.log('hora registrada para el documento:', this.horaActual);
      console.log('fecha registrada para el documento:', this.fechaActual);
      // Aquí podrías hacer una llamada a un servicio o una acción específica

      const data = new FormData();
      data.append('numeroDocumento', this.numeroDocumento);
      data.append('horaActual', this.horaActual);
      data.append('fechaActual', this.fechaActual);

      this.assistsServie.sendAssists(data).subscribe(
        response => {
          if (response.status === true && response.personal) {
            const nombrePersonal = response.personal.NOMBRE; // Ajusta según el campo que contiene el nombre
            Swal.fire({
              title: 'Guardado',
              text: `La asistencia de ${nombrePersonal} ha sido registrada exitosamente.`,
              icon: 'success',
              timer: 3000,  // 3 segundos
              showConfirmButton: false
            }).then(() => {
              // Aquí podrías realizar acciones adicionales si es necesario.
            });
          }
          console.log('Entidad guardada exitosamente', response);
        },
        error => {
          Swal.fire(
            'Error',
            'Personal no encontrado... Consulte con su especialista TIC su registro!',
            'error'
          );
          console.error('Error al guardar la hora', error);
        }
      );

    }else{
      Swal.fire(
        'Error',
        'Hubo un error al guardar la hora, porfavor intente nuevamente.',
        'error'
      );
    }
  }

  actualizarHoraFecha(): void {
    const ahora = new Date();
    this.horaActual = ahora.toLocaleTimeString(); // Actualiza solo la hora
    this.fechaActual = ahora.toLocaleDateString(); // Actualiza solo la fecha
  }

}
