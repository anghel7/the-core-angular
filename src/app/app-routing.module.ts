import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { ClienteCreateComponent } from './cliente/cliente-create/cliente-create.component';
import { ClienteDetailsComponent } from './cliente/cliente-details/cliente-details.component';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cliente/lista',
    component: ClienteListComponent
  },
  {
    path: 'cliente/crear',
    component: ClienteCreateComponent
  },
  {
    path: 'cliente/details',
    component: ClienteDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
