import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../_service/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formdata',
  templateUrl: './formdata.component.html',
  styleUrls: ['./formdata.component.css']
})
export class FormdataComponent implements OnInit {
    num_doc: string = '';
    formData: any = {}; 
    departamentos: any[] = []; 
    provincias: any[] = []; 
    distritos: any[] = [];
    cargos: any[] = []; 
    dniFile: File | null = null;
    isSubmitting: boolean = false;

    //PARA EL FORMULARIO
    id_tipo_doc: string = '';
    sexo: string = '';
    ape_pat: string = '';
    ape_mat: string = '';
    nombre: string = '';
    idpersonal: string = '';
    telefono: string = '';
    celular: string = '';
    correo: string = '';
    direccion: string = '';
    ecivil: string = '';
    df_n_hijos: string = '';
    pcm_talla: string = '';
    tlv_id: string = '';
    gi_id: string = '';
    tip_cas: string = '';
    fech_nacimiento: string = '';
    dp_fecha_ingreso: string = '';
    n_modulo: string = '';
    n_contrato: string = '';
    gi_carrera: string = '';
    gi_curso_esp: string = '';
    dlp_jefe_inmediato: string = '';
    dlp_cargo: string = '';
    dlp_telefono: string = '';

    cargoSeleccionado : string = '';
    departamentoSeleccionado: string = '';
    provinciaSeleccionada: string = '';
    distritoSeleccionado: string = '';
    
    // Definición del diccionario para los nombres amigables
    fieldLabels: { [key: string]: string } = {
      NUM_DOC: 'Número de Documento',
      ID_TIPO_DOC: 'Tipo de Documento',
      SEXO: 'Sexo',
      APE_PAT: 'Apellido Paterno',
      APE_MAT: 'Apellido Materno',
      NOMBRE: 'Nombre',
      TELEFONO: 'Teléfono',
      CELULAR: 'Celular',
      CORREO: 'Correo',
      DIRECCION: 'Dirección',
      DISTRITOSELECCIONADO: 'Distrito',
      FECH_NACIMIENTO: 'Fecha de Nacimiento',
      ECIVIL: 'Estado Civil',
      DF_N_HIJOS: 'Número de Hijos',
      PCM_TALLA: 'Talla de Polo',
      CARGOSELECCIONADO: 'Cargo',
      DP_FECHA_INGRESO: 'Fecha de Ingreso',
      NUMERO_MODULO: 'Número de Módulo',
      TLV_ID: 'Modalidad de Contrato',
      N_CONTRATO: 'Número de Contrato',
      GI_ID: 'Grado',
      GI_CARRERA: 'Carrera / Profesión',
      GI_CURSO_ESP: 'Cursos de Especialización',
      DLP_JEFE_INMMEDIATO: 'Jefe Inmediato Superior',
      DLP_CARGO: 'Cargo',
      DLP_TELEFONO: 'Teléfono'
    };

    constructor (private route: ActivatedRoute, private apiService: ApiService, private changeDetectorRef: ChangeDetectorRef) {}

    ngOnInit(): void{
      this.route.queryParams.subscribe(params => {
        this.num_doc = params['num_doc'];
        if(this.num_doc) {
          this.loadFormData(this.num_doc);
        }
      });
    }

    loadFormData(num_doc: string): void {
      this.apiService.getFormData(num_doc).subscribe(response => {
        console.log(response);
        if (response.status === true) {
          this.formData = response.personal;
          this.departamentos = response.departamentos;
          this.cargos = response.cargos;

          // Inicializa los valores seleccionados si existen
          this.cargoSeleccionado = this.formData.IDCARGO_PERSONAL;
          this.departamentoSeleccionado = this.formData.DEPARTAMENTO_ID;
          this.provinciaSeleccionada = this.formData.PROVINCIA_ID;
          this.distritoSeleccionado = this.formData.IDDISTRITO;

          this.id_tipo_doc = this.formData.IDTIPO_DOC;
          this.sexo = this.formData.SEXO;
          this.ecivil = this.formData.ESTADO_CIVIL;        
          this.tlv_id = this.formData.TVL_ID;
          this.gi_id = this.formData.GI_ID;
          this.tip_cas = this.formData.TIP_CAS;


          this.idpersonal = this.formData.IDPERSONAL;
          this.nombre = this.formData.NOMBRE;
          this.ape_pat = this.formData.APE_PAT;
          this.ape_mat = this.formData.APE_MAT;
          this.telefono = this.formData.TELEFONO;
          this.celular = this.formData.CELULAR;
          this.correo = this.formData.CORREO;
          this.direccion = this.formData.DIRECCION;
          this.fech_nacimiento = this.formData.FECH_NACIMIENTO;
          this.df_n_hijos = this.formData.DF_N_HIJOS;
          this.pcm_talla = this.formData.PCM_TALLA;
          this.dp_fecha_ingreso = this.formData.PD_FECHA_INGRESO;
          this.n_modulo = this.formData.NUMERO_MODULO;
          this.n_contrato = this.formData.N_CONTRATO;
          this.gi_carrera = this.formData.GI_CARRERA;
          this.gi_curso_esp = this.formData.GI_CURSO_ESP;
          this.dlp_jefe_inmediato = this.formData.DLP_JEFE_INMEDIATO;
          this.dlp_cargo = this.formData.DLP_CARGO;
          this.dlp_telefono = this.formData.DLP_TELEFONO;
          
          // Carga las provincias y distritos si ya hay un distrito seleccionado
          if (this.departamentoSeleccionado) {
            this.loadProvincias(this.departamentoSeleccionado, true);
          }
        } else {
          console.error('Error al cargar los datos del formulario:', response.message);
        }
      }, error => {
        console.error('Error al cargar los datos del formulario:', error);
      });
    }

    loadProvincias(departamentoId: string, loadDistritos: boolean = false) {
      this.apiService.getDepaCombo(departamentoId).subscribe(response => {      
        if (response.status === true) {
          this.provincias = response.provincias;
          if (loadDistritos && this.provinciaSeleccionada) {
            this.loadDistritos(this.provinciaSeleccionada);
          }
        }
      });
    }

    loadDistritos(provinciaId: string) {
      console.log(provinciaId)
      this.apiService.getDistrCombo(provinciaId).subscribe(response => {      
        if (response.status === true) {
          this.distritos = response.distritos;
        }
      });
    }

    onDepartmentChange() {
      this.loadProvincias(this.departamentoSeleccionado);
    }

    onProvinceChange() {
      this.loadDistritos(this.provinciaSeleccionada);
    }

    onFileChange(event: any) {
      const file = event.target.files[0];
      const fileType = file ? file.type : '';
    
      if (fileType === 'image/jpeg' || fileType === 'image/jpg' || fileType === 'image/png') {
        this.dniFile = file;
      } else {
        this.dniFile = null;
        Swal.fire({
          icon: 'error',
          title: 'Formato no permitido',
          text: 'Solo se aceptan archivos en formato JPG, JPEG y PNG.'
        });
        // Restablecer el valor del input file
        event.target.value = '';
        this.changeDetectorRef.detectChanges();
      }
    }

    btnEnviar(){

      console.log(this.dniFile);

      const formData = new FormData();
        formData.append('num_doc', this.num_doc);
        formData.append('idpersonal', this.idpersonal);
        formData.append('id_tipo_doc', this.id_tipo_doc);
        formData.append('sexo', this.sexo);
        formData.append('ape_pat', this.ape_pat);
        formData.append('ape_mat', this.ape_mat);
        formData.append('nombre', this.nombre);
        formData.append('telefono', this.telefono);
        formData.append('celular', this.celular);
        formData.append('correo', this.correo);
        formData.append('direccion', this.direccion);
        formData.append('distritoSeleccionado', this.distritoSeleccionado);
        formData.append('fech_nacimiento', this.fech_nacimiento);
        formData.append('ecivil', this.ecivil);
        formData.append('df_n_hijos', this.df_n_hijos);
        formData.append('pcm_talla', this.pcm_talla);
        formData.append('cargoSeleccionado', this.cargoSeleccionado);
        formData.append('dp_fecha_ingreso', this.dp_fecha_ingreso);
        formData.append('n_modulo', this.n_modulo);
        formData.append('tlv_id', this.tlv_id);
        formData.append('n_contrato', this.n_contrato);
        formData.append('gi_id', this.gi_id);
        formData.append('gi_carrera', this.gi_carrera);
        formData.append('gi_curso_esp', this.gi_curso_esp);
        formData.append('dlp_jefe_inmediato', this.dlp_jefe_inmediato);
        formData.append('dlp_cargo', this.dlp_cargo);
        formData.append('dlp_telefono', this.dlp_telefono);
        formData.append('tip_cas', this.tip_cas);
    
        // Agrega el archivo PDF
        if (this.dniFile) {
          formData.append('dni', this.dniFile);
        }

        this.isSubmitting = true;

        this.apiService.sendFormData(formData).subscribe(response => {
          this.isSubmitting = false;
          if (response.status === true) {
            const pendingList = response.pending.map((item: string) => `<li>${this.fieldLabels[item] || item}</li>`).join('');
            console.log(response.data);
            Swal.fire({
              icon: 'success',
              title: 'Éxito',
              html: `Formulario enviado correctamente.<br/>${response.pending.length > 0 ? 'Pendientes en responder:<ul class="ms-5 text-start">' + pendingList + '</ul>' : ''}<br/> <span class="text-info">Se te envió una notificación via correo, si no lo encuentras verificar en spam ó correo no deseado!</span>`
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: response.message
            });
          }
        }, error => {
          this.isSubmitting = false;
          console.error('Error al enviar el formulario:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un error al enviar el formulario.'
          });
        });
    }
}