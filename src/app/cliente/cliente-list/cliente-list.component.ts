import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sky-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  title: string = "Bienvenido al modulo de clientes";
  urlimage: string = "https://img.timesnownews.com/story/1550976042-Thanos_new.jpg?d=600x450"

  constructor() { }

  ngOnInit() {
  }

  login(imagen: string): void {
    console.log('Iniciando sesion: ', imagen)
  }

}
