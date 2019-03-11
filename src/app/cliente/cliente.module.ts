import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';
import { ClienteItemComponent } from './cliente-item/cliente-item.component';
import { ClienteDetailsComponent } from './cliente-details/cliente-details.component';

@NgModule({
  declarations: [ClienteListComponent, ClienteCreateComponent, ClienteItemComponent, ClienteDetailsComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FormsModule
  ],
  exports: [
    ClienteListComponent,
    ClienteCreateComponent
  ]
})
export class ClienteModule { }
