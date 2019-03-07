import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sky-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  title: string = "Bienvenido al modulo de clientes";

  clienteList: any[] = [
    {
      id_cliente: 1,
      nombre: "Juan",
      apellido_paterno: "Perez",
      apellido_materno: "Lopez",
      image_url: "http://cursoangular.hosting.cs.umss.edu.bo/images/cliente/juan.jpg"
    },
    {
      id_cliente: 2,
      nombre: "Ester Mariso",
      apellido_paterno: "Gomez",
      apellido_materno: "Aramayo",
      image_url: "http://cursoangular.hosting.cs.umss.edu.bo/images/cliente/ester.jpg"
    },
    {
      id_cliente: 3,
      nombre: "Emilia",
      apellido_paterno: "Noguera",
      apellido_materno: "Rios",
      image_url: "http://cursoangular.hosting.cs.umss.edu.bo/images/cliente/emilia.jpg"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  ver(e): void {
    console.log('Reciviendo inforamcion del hijo: ', e);

  }


}
