import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteListComponent } from './cliente-list/cliente-list.component';

@NgModule({
  declarations: [ClienteListComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ],
  exports: [
    ClienteListComponent
  ]
})
export class ClienteModule { }
