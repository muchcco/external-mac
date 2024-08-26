import './polyfills.server.mjs';
import{a as S}from"./chunk-KGNXV6JG.mjs";import{a as C,b as k,c as D}from"./chunk-AOVB75UK.mjs";import{C as h,J as l,K as p,Ma as v,S as f,W as t,X as n,Y as c,Z as r,fa as i,ga as _,ha as b,ia as A,ja as E,q as g}from"./chunk-XQN6XOTR.mjs";import{a as T}from"./chunk-OOXRSCGJ.mjs";import{g as N}from"./chunk-5XUXGTUW.mjs";var u=N(T());var R=(()=>{class m{platformId;assistsServie;numeroDocumento="";horaActual="";fechaActual="";constructor(o,a){this.platformId=o,this.assistsServie=a}ngOnInit(){v(this.platformId)&&(this.actualizarHoraFecha(),setInterval(()=>{this.actualizarHoraFecha()},1e3))}agregarNumero(o){this.numeroDocumento.length<10&&(this.numeroDocumento+=o)}borrarNumero(){this.numeroDocumento=this.numeroDocumento.slice(0,-1)}limpiarNumero(){this.numeroDocumento=""}registrarAsistencia(){if(this.numeroDocumento&&this.horaActual&&this.fechaActual){console.log("Asistencia registrada para el documento:",this.numeroDocumento),console.log("hora registrada para el documento:",this.horaActual),console.log("fecha registrada para el documento:",this.fechaActual);let o=new FormData;o.append("numeroDocumento",this.numeroDocumento),o.append("horaActual",this.horaActual),o.append("fechaActual",this.fechaActual),this.assistsServie.sendAssists(o).subscribe(a=>{if(a.status===!0&&a.personal){let e=a.personal.NOMBRE;u.default.fire({title:"Guardado",text:`La asistencia de ${e} ha sido registrada exitosamente.`,icon:"success",timer:3e3,showConfirmButton:!1}).then(()=>{})}console.log("Entidad guardada exitosamente",a)},a=>{u.default.fire("Error","Personal no encontrado... Consulte con su especialista TIC su registro!","error"),console.error("Error al guardar la hora",a)})}else u.default.fire("Error","Hubo un error al guardar la hora, porfavor intente nuevamente.","error")}actualizarHoraFecha(){let o=new Date;this.horaActual=o.toLocaleTimeString(),this.fechaActual=o.toLocaleDateString()}static \u0275fac=function(a){return new(a||m)(p(h),p(S))};static \u0275cmp=g({type:m,selectors:[["app-assists"]],decls:58,vars:4,consts:[[1,"container"],[1,"card"],[1,"card-header","text-bg-dark"],[1,"text-center","tex"],[1,"card-header","text-bg-info","text-white"],[1,"tex"],[1,"card-body"],[1,"row","mb-4","justify-content-center"],[1,"col-sm-12","col-md-12"],[1,"col-sm-12"],["type","text","id","numeroDocumento","readonly","",1,"form-control","text-center","fs-1",3,"ngModelChange","ngModel"],[1,"row","justify-content-center"],[1,"col-sm-6","col-md-4"],[1,"teclado-numerico","text-center"],[1,"btn","btn-outline-primary","m-1",3,"click"],[1,"row","justify-content-center","mt-3"],[1,"col-sm-6","col-md-4","text-center"],[1,"btn","btn-success",3,"click","disabled"],[1,"row","justify-content-center","mt-1"]],template:function(a,e){a&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),i(4,"INGRESE SU N\xDAMERO DE DOCUMENTO PARA EL RESPECTIVO REGISTRO"),n()()()(),c(5,"br"),t(6,"div",0)(7,"div",1)(8,"div",4)(9,"div",5),i(10,"INGRESE EL N\xDAMERO DE SU DOCUMENTO"),n()(),t(11,"div",6)(12,"div",7)(13,"div",8)(14,"div",9)(15,"input",10),E("ngModelChange",function(d){return A(e.numeroDocumento,d)||(e.numeroDocumento=d),d}),n()()()(),t(16,"div",11)(17,"div",12)(18,"div",13)(19,"button",14),r("click",function(){return e.agregarNumero("1")}),i(20,"1"),n(),t(21,"button",14),r("click",function(){return e.agregarNumero("2")}),i(22,"2"),n(),t(23,"button",14),r("click",function(){return e.agregarNumero("3")}),i(24,"3"),n(),c(25,"br"),t(26,"button",14),r("click",function(){return e.agregarNumero("4")}),i(27,"4"),n(),t(28,"button",14),r("click",function(){return e.agregarNumero("5")}),i(29,"5"),n(),t(30,"button",14),r("click",function(){return e.agregarNumero("6")}),i(31,"6"),n(),c(32,"br"),t(33,"button",14),r("click",function(){return e.agregarNumero("7")}),i(34,"7"),n(),t(35,"button",14),r("click",function(){return e.agregarNumero("8")}),i(36,"8"),n(),t(37,"button",14),r("click",function(){return e.agregarNumero("9")}),i(38,"9"),n(),c(39,"br"),t(40,"button",14),r("click",function(){return e.borrarNumero()}),i(41,"\u2190"),n(),t(42,"button",14),r("click",function(){return e.agregarNumero("0")}),i(43,"0"),n(),t(44,"button",14),r("click",function(){return e.limpiarNumero()}),i(45,"C"),n()()()(),t(46,"div",15)(47,"div",16)(48,"button",17),r("click",function(){return e.registrarAsistencia()}),i(49,"Registrar Asistencia"),n()()(),t(50,"div",15)(51,"div",16)(52,"h2"),i(53),n()()(),t(54,"div",18)(55,"div",16)(56,"h4"),i(57),n()()()()()()),a&2&&(l(15),b("ngModel",e.numeroDocumento),l(33),f("disabled",e.numeroDocumento.length===0),l(5),_(e.horaActual),l(4),_(e.fechaActual))},dependencies:[C,k,D],styles:[".teclado-numerico[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:60px;height:60px;font-size:24px}"]})}return m})();export{R as a};
