import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_service/api.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  id_mac: any[] = [];
  id_tip_doc: any[] = [];
  entidades: any[] = [];

  nom_mac: string = ''; 
  tip_doc: string = ''; 
  options: string = ''; 

  num_doc: string = '';
  entidad: string = '';

  constructor(private apiService: ApiService, private spinner: NgxSpinnerService, private router: Router) {}

  ngOnInit(): void {
    this.getMac();
  }

  getMac(): void {
    this.apiService.getPersonalCombo().subscribe(
      response => {
        if(response.status == true){
          this.id_mac = response.nom_mac;
          this.id_tip_doc = response.tip_doc;
          console.log("ULTIMO:", response.nom_mac)
        }
      }
    );
  }

  onCentroMacChange() {
    console.log("ret:", this.nom_mac)
    if (this.nom_mac) {
      this.apiService.getEntityCombo(this.nom_mac).subscribe(
        response => {
          if (response.status === true) {
            this.entidades = response.options;
            // console.log("ULTIMO:", response)
          }
        },
        error => {
          console.error('Error fetching entity combo:', error);
        }
      );
    }
  }

  validarDatos() {
    console.log("Tipo de Documento:", this.tip_doc);
    console.log("Número de Documento:", this.num_doc);
    console.log("Entidad:", this.options);
    console.log("Centro MAC:", this.nom_mac);
    if (!this.tip_doc || !this.num_doc || !this.options || !this.nom_mac) {
      Swal.fire({
        icon: 'error',
        title: 'Campos incompletos',
        text: 'Por favor, complete todos los campos requeridos.'
      });
      return;
    }
    
    const data = {
      tip_doc: this.tip_doc,
      num_doc: this.num_doc,
      entidad: this.options,
      nom_mac: this.nom_mac
    };

    this.spinner.show();  // Mostrar spinner
    this.apiService.validateData(data).subscribe(response => {
      this.spinner.hide();  // Ocultar spinner
      console.log(response);
      if (response.status == '201' || response.status == '202') {
        Swal.fire({
            icon: "info",
            text: response.message,
            confirmButtonText: "Aceptar"
        });
      } else if(response.status === true) {
          console.log(response);
          this.router.navigate(['/formdata'], { queryParams: { num_doc: this.num_doc } });
      }
    }, error => {
      this.spinner.hide();  // Ocultar spinner en caso de error
      console.error('Error de validación:', error);
        Swal.fire({
            icon: "warning",
            text: error.message,
            confirmButtonText: "Aceptar"
        });
    });
  }


}
