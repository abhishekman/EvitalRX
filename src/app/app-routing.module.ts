import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AdminHomeComponent } from './admin/admin-home/admin-home.component';

const routes: Routes = [
  { path: '', redirectTo: '/outer/home', pathMatch: 'full' },
  {
    path: 'outer',
    loadChildren: () => import('./outer/outer.module').then(module => module.OuterModule)
  },
  {
    path:'admin',
    loadChildren:() => import('./admin/admin.module').then(module => module.AdminModule)
  },

  { path: 'admin/admin-home', component: AdminHomeComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }