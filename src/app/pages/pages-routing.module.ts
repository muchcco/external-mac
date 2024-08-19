import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../module/layout/layout.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'pages', component: PagesComponent },
      { path: 'personal', loadChildren: () => import('./personal/personal.module').then(m => m.PersonalModule), data: { title: 'Registro de Personal' } },
      { path: 'formdata', loadChildren: () => import('./formdata/formdata.module').then(m => m.FormdataModule), data: { title: 'Complete sus datos' } },
      { path: 'assists', loadChildren: () => import('./assists/assists.module').then(m => m.AssistsModule), data: { title: 'Registro de Asistencia' } },
      { path: '', redirectTo: 'personal', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
