import './polyfills.server.mjs';
import{a as O}from"./chunk-TI35GBKZ.mjs";import{a as T,b as I,c as w,d as P,e as A,f as F,g as L}from"./chunk-KDMORO7R.mjs";import{Ia as D,J as a,K as C,Q as S,S as r,W as i,X as n,Y as u,Z as v,_a as b,ba as _,fa as o,ga as h,ha as p,ia as c,ja as s,q as y,xa as M}from"./chunk-7HI3TCKN.mjs";import{a as N}from"./chunk-OOXRSCGJ.mjs";import{g as W}from"./chunk-5XUXGTUW.mjs";var E=W(N());function R(g,f){if(g&1&&(i(0,"option",109),o(1),n()),g&2){let l=f.$implicit;r("value",l.IDDEPARTAMENTO),a(),h(l.NAME_DEPARTAMENTO)}}function B(g,f){if(g&1&&(i(0,"option",109),o(1),n()),g&2){let l=f.$implicit;r("value",l.IDPROVINCIA),a(),h(l.NAME_PROVINCIA)}}function j(g,f){if(g&1&&(i(0,"option",109),o(1),n()),g&2){let l=f.$implicit;r("value",l.IDDISTRITO),a(),h(l.NAME_DISTRITO)}}function X(g,f){if(g&1&&(i(0,"option",109),o(1),n()),g&2){let l=f.$implicit;r("value",l.IDCARGO_PERSONAL),a(),h(l.NOMBRE_CARGO)}}var k=(()=>{class g{route;apiService;changeDetectorRef;num_doc="";formData={};departamentos=[];provincias=[];distritos=[];cargos=[];dniFile=null;isSubmitting=!1;id_tipo_doc="";sexo="";ape_pat="";ape_mat="";nombre="";idpersonal="";telefono="";celular="";correo="";direccion="";ecivil="";df_n_hijos="";pcm_talla="";tlv_id="";gi_id="";tip_cas="";fech_nacimiento="";dp_fecha_ingreso="";n_modulo="";n_contrato="";gi_carrera="";gi_curso_esp="";dlp_jefe_inmediato="";dlp_cargo="";dlp_telefono="";cargoSeleccionado="";departamentoSeleccionado="";provinciaSeleccionada="";distritoSeleccionado="";fieldLabels={NUM_DOC:"N\xFAmero de Documento",ID_TIPO_DOC:"Tipo de Documento",SEXO:"Sexo",APE_PAT:"Apellido Paterno",APE_MAT:"Apellido Materno",NOMBRE:"Nombre",TELEFONO:"Tel\xE9fono",CELULAR:"Celular",CORREO:"Correo",DIRECCION:"Direcci\xF3n",DISTRITOSELECCIONADO:"Distrito",FECH_NACIMIENTO:"Fecha de Nacimiento",ECIVIL:"Estado Civil",DF_N_HIJOS:"N\xFAmero de Hijos",PCM_TALLA:"Talla de Polo",CARGOSELECCIONADO:"Cargo",DP_FECHA_INGRESO:"Fecha de Ingreso",NUMERO_MODULO:"N\xFAmero de M\xF3dulo",TLV_ID:"Modalidad de Contrato",N_CONTRATO:"N\xFAmero de Contrato",GI_ID:"Grado",GI_CARRERA:"Carrera / Profesi\xF3n",GI_CURSO_ESP:"Cursos de Especializaci\xF3n",DLP_JEFE_INMMEDIATO:"Jefe Inmediato Superior",DLP_CARGO:"Cargo",DLP_TELEFONO:"Tel\xE9fono"};constructor(l,m,e){this.route=l,this.apiService=m,this.changeDetectorRef=e}ngOnInit(){this.route.queryParams.subscribe(l=>{this.num_doc=l.num_doc,this.num_doc&&this.loadFormData(this.num_doc)})}loadFormData(l){this.apiService.getFormData(l).subscribe(m=>{console.log(m),m.status===!0?(this.formData=m.personal,this.departamentos=m.departamentos,this.cargos=m.cargos,this.cargoSeleccionado=this.formData.IDCARGO_PERSONAL,this.departamentoSeleccionado=this.formData.DEPARTAMENTO_ID,this.provinciaSeleccionada=this.formData.PROVINCIA_ID,this.distritoSeleccionado=this.formData.IDDISTRITO,this.id_tipo_doc=this.formData.IDTIPO_DOC,this.sexo=this.formData.SEXO,this.ecivil=this.formData.ESTADO_CIVIL,this.tlv_id=this.formData.TVL_ID,this.gi_id=this.formData.GI_ID,this.tip_cas=this.formData.TIP_CAS,this.idpersonal=this.formData.IDPERSONAL,this.nombre=this.formData.NOMBRE,this.ape_pat=this.formData.APE_PAT,this.ape_mat=this.formData.APE_MAT,this.telefono=this.formData.TELEFONO,this.celular=this.formData.CELULAR,this.correo=this.formData.CORREO,this.direccion=this.formData.DIRECCION,this.fech_nacimiento=this.formData.FECH_NACIMIENTO,this.df_n_hijos=this.formData.DF_N_HIJOS,this.pcm_talla=this.formData.PCM_TALLA,this.dp_fecha_ingreso=this.formData.PD_FECHA_INGRESO,this.n_modulo=this.formData.NUMERO_MODULO,this.n_contrato=this.formData.N_CONTRATO,this.gi_carrera=this.formData.GI_CARRERA,this.gi_curso_esp=this.formData.GI_CURSO_ESP,this.dlp_jefe_inmediato=this.formData.DLP_JEFE_INMEDIATO,this.dlp_cargo=this.formData.DLP_CARGO,this.dlp_telefono=this.formData.DLP_TELEFONO,this.departamentoSeleccionado&&this.loadProvincias(this.departamentoSeleccionado,!0)):console.error("Error al cargar los datos del formulario:",m.message)},m=>{console.error("Error al cargar los datos del formulario:",m)})}loadProvincias(l,m=!1){this.apiService.getDepaCombo(l).subscribe(e=>{e.status===!0&&(this.provincias=e.provincias,m&&this.provinciaSeleccionada&&this.loadDistritos(this.provinciaSeleccionada))})}loadDistritos(l){console.log(l),this.apiService.getDistrCombo(l).subscribe(m=>{m.status===!0&&(this.distritos=m.distritos)})}onDepartmentChange(){this.loadProvincias(this.departamentoSeleccionado)}onProvinceChange(){this.loadDistritos(this.provinciaSeleccionada)}onFileChange(l){let m=l.target.files[0],e=m?m.type:"";e==="image/jpeg"||e==="image/jpg"||e==="image/png"?this.dniFile=m:(this.dniFile=null,E.default.fire({icon:"error",title:"Formato no permitido",text:"Solo se aceptan archivos en formato JPG, JPEG y PNG."}),l.target.value="",this.changeDetectorRef.detectChanges())}btnEnviar(){console.log(this.dniFile);let l=new FormData;l.append("num_doc",this.num_doc),l.append("idpersonal",this.idpersonal),l.append("id_tipo_doc",this.id_tipo_doc),l.append("sexo",this.sexo),l.append("ape_pat",this.ape_pat),l.append("ape_mat",this.ape_mat),l.append("nombre",this.nombre),l.append("telefono",this.telefono),l.append("celular",this.celular),l.append("correo",this.correo),l.append("direccion",this.direccion),l.append("distritoSeleccionado",this.distritoSeleccionado),l.append("fech_nacimiento",this.fech_nacimiento),l.append("ecivil",this.ecivil),l.append("df_n_hijos",this.df_n_hijos),l.append("pcm_talla",this.pcm_talla),l.append("cargoSeleccionado",this.cargoSeleccionado),l.append("dp_fecha_ingreso",this.dp_fecha_ingreso),l.append("n_modulo",this.n_modulo),l.append("tlv_id",this.tlv_id),l.append("n_contrato",this.n_contrato),l.append("gi_id",this.gi_id),l.append("gi_carrera",this.gi_carrera),l.append("gi_curso_esp",this.gi_curso_esp),l.append("dlp_jefe_inmediato",this.dlp_jefe_inmediato),l.append("dlp_cargo",this.dlp_cargo),l.append("dlp_telefono",this.dlp_telefono),l.append("tip_cas",this.tip_cas),this.dniFile&&l.append("dni",this.dniFile),this.isSubmitting=!0,this.apiService.sendFormData(l).subscribe(m=>{if(this.isSubmitting=!1,m.status===!0){let e=m.pending.map(d=>`<li>${this.fieldLabels[d]||d}</li>`).join("");console.log(m.data),E.default.fire({icon:"success",title:"\xC9xito",html:`Formulario enviado correctamente.<br/>${m.pending.length>0?'Pendientes en responder:<ul class="ms-5 text-start">'+e+"</ul>":""}<br/> <span class="text-info">Se te envi\xF3 una notificaci\xF3n via correo, si no lo encuentras verificar en spam \xF3 correo no deseado!</span>`})}else E.default.fire({icon:"error",title:"Error",text:m.message})},m=>{this.isSubmitting=!1,console.error("Error al enviar el formulario:",m),E.default.fire({icon:"error",title:"Error",text:"Hubo un error al enviar el formulario."})})}static \u0275fac=function(m){return new(m||g)(C(b),C(O),C(M))};static \u0275cmp=y({type:g,selectors:[["app-formdata"]],decls:302,vars:86,consts:[[1,"container"],[1,"card"],[1,"card-header","text-bg-dark"],[1,"text-center","tex"],["href","javascript:history.back()",1,"btn","btn-danger"],[1,"card-header","text-bg-success"],[1,"tex"],[1,"card-body"],[1,"row"],[1,"col-sm-5"],[1,"col-sm-12"],["for","IdTipoPersona",1,"control-label"],["type","text","disabled","",1,"form-select",3,"value"],["type","hidden","disabled","",1,"form-select",3,"ngModelChange","value","ngModel"],[1,"col-sm-4"],["for","id_tipo_doc",1,"control-label"],["name","id_tipo_doc","id","id_tipo_doc","aria-label","Tipo de Persona","maxlength","8",1,"form-select",3,"ngModelChange","ngModel"],["value","1",3,"selected"],["value","2",3,"selected"],["value","3",3,"selected"],["for","num_doc",1,"control-label"],["type","text","name","num_doc","disabled","",1,"form-control",3,"ngModelChange","ngModel","value"],["for","sexo",1,"control-label"],["name","sexo","id","sexo",1,"form-select",3,"ngModelChange","ngModel"],["for","ape_pat",1,"control-label"],["type","text","name","ape_pat",1,"form-control",3,"ngModelChange","ngModel","value"],["for","ape_mat",1,"control-label"],["type","text","name","ape_mat",1,"form-control",3,"ngModelChange","ngModel","value"],["for","nombre",1,"control-label"],["type","text","name","nombre",1,"form-control",3,"ngModelChange","ngModel","value"],["for","celular",1,"control-label"],["type","text","name","celular","onkeypress","return isNumber(event)",1,"form-control",3,"ngModelChange","ngModel","value"],["for","telefono",1,"control-label"],["type","text","name","telefono","onkeypress","return isNumber(event)",1,"form-control",3,"ngModelChange","ngModel","value"],["for","correo",1,"control-label"],["type","text","name","correo",1,"form-control",3,"ngModelChange","ngModel","value"],["for","direccion",1,"control-label"],["type","text","name","direccion",1,"form-control",3,"ngModelChange","ngModel","value"],[1,"row","mb-3"],["for","departamentoSeleccionado",1,"control-label"],["name","departamentoSeleccionado",1,"form-select","col-6",3,"ngModelChange","change","ngModel"],["value","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["for","provinciaSeleccionada",1,"control-label"],["name","provinciaSeleccionada",1,"form-select","form-select-solid",3,"ngModelChange","change","ngModel"],["for","distritoSeleccionado",1,"control-label"],["name","distritoSeleccionado",1,"form-select","form-select-solid",3,"ngModelChange","ngModel"],["value",""],[1,"raya"],["for","fech_nacimiento",1,"control-label"],["type","date","name","fech_nacimiento",1,"form-control",3,"ngModelChange","ngModel","value"],["for","ecivil",1,"control-label"],["name","ecivil","id","ecivil",1,"form-select",3,"ngModelChange","ngModel"],["value","4",3,"selected"],["value","5",3,"selected"],["for","df_n_hijos",1,"control-label"],["type","text","name","df_n_hijos",1,"form-control",3,"ngModelChange","ngModel","value"],["for","pcm_talla",1,"control-label"],["name","pcm_talla","id","pcm_talla",1,"form-select",3,"ngModelChange","ngModel"],["value","XXS",3,"selected"],["value","XS",3,"selected"],["value","S",3,"selected"],["value","M",3,"selected"],["value","L",3,"selected"],["value","XL",3,"selected"],["value","XXL",3,"selected"],["value","XXXL",3,"selected"],["for","cargoSeleccionado",1,"control-label"],["name","cargoSeleccionado",1,"form-select","form-select-solid",3,"ngModelChange","ngModel"],["for","dp_fecha_ingreso",1,"control-label"],["type","date","name","dp_fecha_ingreso",1,"form-control",3,"ngModelChange","ngModel","value"],["for","n_modulo",1,"control-label"],[1,"text-info","fw-bolder"],["type","text","name","n_modulo",1,"form-control",3,"ngModelChange","ngModel","value"],["for","tlv_id",1,"control-label"],["name","tlv_id","id","tlv_id",1,"form-select",3,"ngModelChange","ngModel"],["for","n_contrato",1,"control-label"],[1,"text-success","fw-bolder"],["type","text","name","n_contrato",1,"form-control",3,"ngModelChange","ngModel","value"],["for","tip_cas",1,"control-label"],["name","tip_cas","id","tip_cas",1,"form-select",3,"ngModelChange","ngModel"],["value","","selected",""],["for","gi_id",1,"control-label"],["name","gi_id",1,"form-select",3,"ngModelChange","ngModel"],["value","6",3,"selected"],[1,"col-sm-8"],["for","gi_carrera",1,"control-label"],["type","text","name","gi_carrera",1,"form-control",3,"ngModelChange","ngModel","value"],["for","gi_curso_esp",1,"control-label"],["type","text","name","gi_curso_esp",1,"form-control",3,"ngModelChange","ngModel","value"],["for","dlp_jefe_inmediato",1,"control-label"],["type","text","name","dlp_jefe_inmediato",1,"form-control",3,"ngModelChange","ngModel","value"],["for","dlp_cargo",1,"control-label"],["type","text","name","dlp_cargo",1,"form-control",3,"ngModelChange","ngModel","value"],["for","dlp_telefono",1,"control-label"],["type","text","name","dlp_telefono",1,"form-control",3,"ngModelChange","ngModel","value"],[1,"carp"],[1,"form-p"],[1,"row","col-sm-6","buut"],[1,"mb-3"],["for","dni",1,"control-label"],["type","file","name","dni",1,"form-control",3,"change"],[1,"form-p","btn_enviar"],[1,"row","col-sm-2","buut"],[1,""],["type","button",1,"form-control","btn","btn-danger",3,"click","disabled"],[1,"row","col-sm-3","buut"],["for","TipoDoc",1,"control-label"],[1,"row","col-sm-8","buut"],[3,"value"]],template:function(m,e){m&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),o(4,"COMPLETE EL FORMULARIO"),n()()()(),u(5,"br"),i(6,"div",0)(7,"a",4),o(8,"Cerrar Sesi\xF3n"),n()(),u(9,"br"),i(10,"div",0)(11,"div",1)(12,"div",5)(13,"div",6),o(14,"DATOS DE LA ENTIDAD"),n()(),i(15,"div",7)(16,"div",8)(17,"div",9)(18,"div",10)(19,"label",11),o(20,"Nombre de la Entidad "),n(),u(21,"input",12),n()(),i(22,"div",9)(23,"div",10)(24,"label",11),o(25,"Sede "),n(),u(26,"input",12),i(27,"input",13),s("ngModelChange",function(t){return c(e.idpersonal,t)||(e.idpersonal=t),t}),n()()()()()()(),u(28,"br"),i(29,"div",0)(30,"div",1)(31,"div",5)(32,"div",6),o(33,"DATOS PERSONALES"),n()(),i(34,"div",7)(35,"div",8)(36,"div",14)(37,"label",15),o(38,"Tipo de Documento "),n(),i(39,"select",16),s("ngModelChange",function(t){return c(e.id_tipo_doc,t)||(e.id_tipo_doc=t),t}),i(40,"option",17),o(41,"DNI"),n(),i(42,"option",18),o(43,"Carnet de Extranjer\xEDa"),n(),i(44,"option",19),o(45,"Pasaporte"),n()()(),i(46,"div",14)(47,"label",20),o(48,"Nro. Documento "),n(),i(49,"input",21),s("ngModelChange",function(t){return c(e.num_doc,t)||(e.num_doc=t),t}),n()(),i(50,"div",14)(51,"label",22),o(52,"Sexo "),n(),i(53,"select",23),s("ngModelChange",function(t){return c(e.sexo,t)||(e.sexo=t),t}),i(54,"option",17),o(55,"Hombre"),n(),i(56,"option",18),o(57,"Mujer"),n()()()(),i(58,"div",8)(59,"div",14)(60,"label",24),o(61,"Apellido Paterno "),n(),i(62,"input",25),s("ngModelChange",function(t){return c(e.ape_pat,t)||(e.ape_pat=t),t}),n()(),i(63,"div",14)(64,"label",26),o(65,"Apellido Materno "),n(),i(66,"input",27),s("ngModelChange",function(t){return c(e.ape_mat,t)||(e.ape_mat=t),t}),n()(),i(67,"div",14)(68,"label",28),o(69,"Nombres "),n(),i(70,"input",29),s("ngModelChange",function(t){return c(e.nombre,t)||(e.nombre=t),t}),n()()(),i(71,"div",8)(72,"div",14)(73,"label",30),o(74,"Celular "),n(),i(75,"input",31),s("ngModelChange",function(t){return c(e.celular,t)||(e.celular=t),t}),n()(),i(76,"div",14)(77,"label",32),o(78,"Tel\xE9fono"),n(),i(79,"input",33),s("ngModelChange",function(t){return c(e.telefono,t)||(e.telefono=t),t}),n()(),i(80,"div",14)(81,"label",34),o(82,"Correo "),n(),i(83,"input",35),s("ngModelChange",function(t){return c(e.correo,t)||(e.correo=t),t}),n()()(),i(84,"div",8)(85,"div",10)(86,"label",36),o(87,"Direcci\xF3n Actual "),n(),i(88,"input",37),s("ngModelChange",function(t){return c(e.direccion,t)||(e.direccion=t),t}),n()()(),i(89,"div",38)(90,"div",14)(91,"label",39),o(92,"Departamento (actual)"),n(),i(93,"select",40),s("ngModelChange",function(t){return c(e.departamentoSeleccionado,t)||(e.departamentoSeleccionado=t),t}),v("change",function(){return e.onDepartmentChange()}),i(94,"option",41),o(95,"-- Seleccione una opci\xF3n --"),n(),S(96,R,2,2,"option",42),n()(),i(97,"div",14)(98,"label",43),o(99,"Provincia (actual)"),n(),i(100,"select",44),s("ngModelChange",function(t){return c(e.provinciaSeleccionada,t)||(e.provinciaSeleccionada=t),t}),v("change",function(){return e.onProvinceChange()}),i(101,"option",41),o(102,"-- Seleccione una provincia --"),n(),S(103,B,2,2,"option",42),n()(),i(104,"div",14)(105,"label",45),o(106,"Distrito (actual)"),n(),i(107,"select",46),s("ngModelChange",function(t){return c(e.distritoSeleccionado,t)||(e.distritoSeleccionado=t),t}),i(108,"option",47),o(109,"-- Seleccione un distrito --"),n(),S(110,j,2,2,"option",42),n()()(),u(111,"div",48),i(112,"div",8)(113,"div",14)(114,"label",49),o(115,"Fecha de Nacimiento "),n(),i(116,"input",50),s("ngModelChange",function(t){return c(e.fech_nacimiento,t)||(e.fech_nacimiento=t),t}),n()(),i(117,"div",14)(118,"label",51),o(119,"Estado Civil "),n(),i(120,"select",52),s("ngModelChange",function(t){return c(e.ecivil,t)||(e.ecivil=t),t}),i(121,"option",17),o(122,"Soltero(a)"),n(),i(123,"option",18),o(124,"Casado(a)"),n(),i(125,"option",19),o(126,"Divorciado(a)"),n(),i(127,"option",53),o(128,"Viudo(a)"),n(),i(129,"option",54),o(130,"Conviviente"),n()()(),i(131,"div",14)(132,"label",55),o(133,"N\xFAmero de Hijos"),n(),i(134,"input",56),s("ngModelChange",function(t){return c(e.df_n_hijos,t)||(e.df_n_hijos=t),t}),n()()(),i(135,"div",8)(136,"div",14)(137,"label",57),o(138,"Talla de polo "),n(),i(139,"select",58),s("ngModelChange",function(t){return c(e.pcm_talla,t)||(e.pcm_talla=t),t}),i(140,"option",59),o(141,"XXS"),n(),i(142,"option",60),o(143,"XS"),n(),i(144,"option",61),o(145,"S"),n(),i(146,"option",62),o(147,"M"),n(),i(148,"option",63),o(149,"L"),n(),i(150,"option",64),o(151,"XL"),n(),i(152,"option",65),o(153,"XXL"),n(),i(154,"option",66),o(155,"XXXL"),n()()()()()()(),u(156,"br"),i(157,"div",0)(158,"div",1)(159,"div",5)(160,"div",6),o(161,"DATOS DEL TRABAJADOR"),n()(),i(162,"div",7)(163,"div",8)(164,"div",14)(165,"label",67),o(166,"Cargo "),n(),i(167,"select",68),s("ngModelChange",function(t){return c(e.cargoSeleccionado,t)||(e.cargoSeleccionado=t),t}),i(168,"option",41),o(169,"-- Seleccione un cargo --"),n(),S(170,X,2,2,"option",42),n()(),i(171,"div",14)(172,"label",69),o(173,"Fecha de Ingreso al centro MAC "),n(),i(174,"input",70),s("ngModelChange",function(t){return c(e.dp_fecha_ingreso,t)||(e.dp_fecha_ingreso=t),t}),n()(),i(175,"div",14)(176,"label",71),o(177,"N\xB0 de m\xF3dulo de atenci\xF3n "),i(178,"span",72),o(179,"(*)"),n()(),i(180,"input",73),s("ngModelChange",function(t){return c(e.n_modulo,t)||(e.n_modulo=t),t}),n()()(),i(181,"div",38)(182,"div",14)(183,"label",74),o(184,"Modalidad de contrato "),n(),i(185,"select",75),s("ngModelChange",function(t){return c(e.tlv_id,t)||(e.tlv_id=t),t}),i(186,"option",17),o(187,"CAS (Contrato administrativo de servicios)"),n(),i(188,"option",18),o(189,"R\xE9gimen laboral de actividad privada"),n(),i(190,"option",19),o(191,"mpleado p\xFAblico"),n()()(),i(192,"div",14)(193,"label",76),o(194,"N\xFAmero de contrato"),i(195,"span",77),o(196,"(*)"),n()(),i(197,"input",78),s("ngModelChange",function(t){return c(e.n_contrato,t)||(e.n_contrato=t),t}),n()(),i(198,"div",14)(199,"label",79),o(200,"De ser CAS "),i(201,"span",77),o(202,"(*)"),n()(),i(203,"select",80),s("ngModelChange",function(t){return c(e.tip_cas,t)||(e.tip_cas=t),t}),i(204,"option",81),o(205,"-- Seleccione una opcion --"),n(),i(206,"option",17),o(207,"PERMANENTE"),n(),i(208,"option",18),o(209,"TEMPORAL"),n()()()(),u(210,"div",48),i(211,"h5"),o(212,"Datos profesionales"),n(),i(213,"div",8)(214,"div",14)(215,"label",82),o(216,"Grado"),n(),i(217,"select",83),s("ngModelChange",function(t){return c(e.gi_id,t)||(e.gi_id=t),t}),i(218,"option",17),o(219,"T\xE9cnico incompleto"),n(),i(220,"option",18),o(221,"T\xE9cnico completo"),n(),i(222,"option",19),o(223,"Superior incompleto"),n(),i(224,"option",53),o(225,"Superior completo"),n(),i(226,"option",54),o(227,"Post grado"),n(),i(228,"option",84),o(229,"Otros"),n()()(),i(230,"div",85)(231,"label",86),o(232,"Carrera / Profesi\xF3n "),n(),i(233,"input",87),s("ngModelChange",function(t){return c(e.gi_carrera,t)||(e.gi_carrera=t),t}),n()()(),i(234,"div",8)(235,"div",10)(236,"label",88),o(237,"Cursos de especializaci\xF3n (opcional)"),n(),i(238,"input",89),s("ngModelChange",function(t){return c(e.gi_curso_esp,t)||(e.gi_curso_esp=t),t}),n()()()()()(),u(239,"br"),i(240,"div",0)(241,"div",1)(242,"div",5)(243,"div",6),o(244,"DATOS LABORALES Y PROFESIONALES"),n()(),i(245,"div",7)(246,"div",8)(247,"div",14)(248,"label",90),o(249,"Jefe inmediato superior "),n(),i(250,"input",91),s("ngModelChange",function(t){return c(e.dlp_jefe_inmediato,t)||(e.dlp_jefe_inmediato=t),t}),n()(),i(251,"div",14)(252,"label",92),o(253,"Cargo "),n(),i(254,"input",93),s("ngModelChange",function(t){return c(e.dlp_cargo,t)||(e.dlp_cargo=t),t}),n()(),i(255,"div",14)(256,"label",94),o(257,"Tel\xE9fono"),n(),i(258,"input",95),s("ngModelChange",function(t){return c(e.dlp_telefono,t)||(e.dlp_telefono=t),t}),n()()()()()(),u(259,"BR"),i(260,"div",0)(261,"div",1)(262,"div",5)(263,"div",6),o(264,"DOCUMENTOS ADJUNTOS"),n()(),i(265,"div",7)(266,"div",96)(267,"div",97)(268,"div",98)(269,"div",99)(270,"label",100),o(271,"Foto "),n(),i(272,"div",10)(273,"input",101),v("change",function(t){return e.onFileChange(t)}),n()()()()()(),i(274,"div",96)(275,"div",102)(276,"div",103)(277,"div",104)(278,"button",105),v("click",function(){return e.btnEnviar()}),o(279),n()()()()(),u(280,"br"),i(281,"div",96)(282,"div",97)(283,"div",106)(284,"div",99)(285,"label",107),o(286,"Nota:"),n()()(),i(287,"div",108)(288,"div",99)(289,"ul")(290,"li"),o(291,"Para el documento principal el formato debe ser pdf, y tama\xF1o m\xE1ximo de 50MB"),n(),i(292,"li"),o(293,"Para los campos que estan con este caracter "),i(294,"span",77),o(295,"(*)"),n(),o(296,", son campos obligatorios para personal PCM"),n(),i(297,"li"),o(298,"Para los campos que estan con este caracter "),i(299,"span",72),o(300,"(*)"),n(),o(301,", son campos obligatorios para asesores de servicio"),n()()()()()()()()()),m&2&&(a(21),_("value",e.formData.NOMBRE_ENTIDAD),a(5),_("value",e.formData.NOMBRE_MAC),a(),_("value",e.formData.IDPERSONAL),p("ngModel",e.idpersonal),a(12),p("ngModel",e.id_tipo_doc),a(),r("selected",e.id_tipo_doc==="1"),a(2),r("selected",e.id_tipo_doc==="2"),a(2),r("selected",e.id_tipo_doc==="3"),a(5),_("value",e.formData.NUM_DOC),p("ngModel",e.num_doc),a(4),p("ngModel",e.sexo),a(),r("selected",e.sexo==="1"),a(2),r("selected",e.sexo==="2"),a(6),p("ngModel",e.ape_pat),r("value",e.formData.APE_PAT),a(4),_("value",e.formData.APE_MAT),p("ngModel",e.ape_mat),a(4),p("ngModel",e.nombre),r("value",e.formData.NOMBRE),a(5),_("value",e.formData.CELULAR),p("ngModel",e.celular),a(4),_("value",e.formData.TELEFONO),p("ngModel",e.telefono),a(4),_("value",e.formData.CORREO),p("ngModel",e.correo),a(5),_("value",e.formData.DIRECCION),p("ngModel",e.direccion),a(5),p("ngModel",e.departamentoSeleccionado),a(3),r("ngForOf",e.departamentos),a(4),p("ngModel",e.provinciaSeleccionada),a(3),r("ngForOf",e.provincias),a(4),p("ngModel",e.distritoSeleccionado),a(3),r("ngForOf",e.distritos),a(6),_("value",e.formData.FECH_NACIMIENTO),p("ngModel",e.fech_nacimiento),a(4),p("ngModel",e.ecivil),a(),r("selected",e.ecivil==="1"),a(2),r("selected",e.ecivil==="2"),a(2),r("selected",e.ecivil==="3"),a(2),r("selected",e.ecivil==="4"),a(2),r("selected",e.ecivil==="4"),a(5),_("value",e.formData.DF_N_HIJOS),p("ngModel",e.df_n_hijos),a(5),p("ngModel",e.pcm_talla),a(),r("selected",e.pcm_talla==="XXS"),a(2),r("selected",e.pcm_talla==="XS"),a(2),r("selected",e.pcm_talla==="S"),a(2),r("selected",e.pcm_talla==="M"),a(2),r("selected",e.pcm_talla==="L"),a(2),r("selected",e.pcm_talla==="XL"),a(2),r("selected",e.pcm_talla==="XXL"),a(2),r("selected",e.pcm_talla==="XXXL"),a(13),p("ngModel",e.cargoSeleccionado),a(3),r("ngForOf",e.cargos),a(4),_("value",e.formData.PD_FECHA_INGRESO),p("ngModel",e.dp_fecha_ingreso),a(6),_("value",e.formData.NUMERO_MODULO),p("ngModel",e.n_modulo),a(5),p("ngModel",e.tlv_id),a(),r("selected",e.tlv_id==="1"),a(2),r("selected",e.tlv_id==="2"),a(2),r("selected",e.tlv_id==="3"),a(7),_("value",e.formData.N_CONTRATO),p("ngModel",e.n_contrato),a(6),p("ngModel",e.tip_cas),a(3),r("selected",e.tip_cas==="1"),a(2),r("selected",e.tip_cas==="2"),a(9),p("ngModel",e.gi_id),a(),r("selected",e.gi_id==="1"),a(2),r("selected",e.gi_id==="2"),a(2),r("selected",e.gi_id==="3"),a(2),r("selected",e.gi_id==="4"),a(2),r("selected",e.gi_id==="5"),a(2),r("selected",e.gi_id==="6"),a(5),_("value",e.formData.GI_CARRERA),p("ngModel",e.gi_carrera),a(5),_("value",e.formData.GI_CURSO_ESP),p("ngModel",e.gi_curso_esp),a(12),_("value",e.formData.DLP_JEFE_INMEDIATO),p("ngModel",e.dlp_jefe_inmediato),a(4),_("value",e.formData.DLP_CARGO),p("ngModel",e.dlp_cargo),a(4),_("value",e.formData.DLP_TELEFONO),p("ngModel",e.dlp_telefono),a(20),r("disabled",e.isSubmitting),a(),h(e.isSubmitting?"Enviando...":"ENVIAR"))},dependencies:[D,A,F,T,P,I,L,w],styles:[".raya[_ngcontent-%COMP%]{width:100%;border:1px solid black;margin-bottom:1em}.carp[_ngcontent-%COMP%]{display:flex;justify-content:center}.form-p[_ngcontent-%COMP%]{width:90%;display:flex}.buut[_ngcontent-%COMP%]{margin-left:.2em;margin-right:.2em}.btn_enviar[_ngcontent-%COMP%]{display:flex!important;justify-content:center!important}"]})}return g})();export{k as a};
