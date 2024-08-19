import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { HeaderComponent } from '../../module/header/header.component';
import { LayoutComponent } from '../../module/layout/layout.component';
import { FooterComponent } from '../../module/footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    LayoutComponent,
    FooterComponent
  ]
})
export class SharedModule { }
