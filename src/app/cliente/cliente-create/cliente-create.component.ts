import { Component, OnInit } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'sky-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cliente: any = {
    id_cliente: undefined,
    nombre: undefined,
    apellido_paterno: undefined,
    apellido_materno: undefined,
    image_url: undefined
  }



  constructor() { }

  ngOnInit() {
  }

  crearCliente(): void {
    console.log('objeto cliente: ', this.cliente);    
  }

}
