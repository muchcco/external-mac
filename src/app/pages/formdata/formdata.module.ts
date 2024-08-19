import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormdataComponent } from './formdata.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: FormdataComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class FormdataModule { }
