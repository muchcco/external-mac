import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalRoutingModule } from './personal-routing.module';
import { PersonalComponent } from './personal.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [PersonalComponent],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    HttpClientModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }), 
  ]
})
export class PersonalModule { }
