import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'sky-cliente-item',
  templateUrl: './cliente-item.component.html',
  styleUrls: ['./cliente-item.component.css']
})
export class ClienteItemComponent implements OnInit {

  @Input() usuario: any;
  @Output() verInfo: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  verInformacion(): void {
    console.log('tratando de enviar informacion')
    this.verInfo.emit(['unod','dos'])
  }

  editarInformacion(): void {
    console.log('Editar informacion: ', this.usuario)
  }

}
