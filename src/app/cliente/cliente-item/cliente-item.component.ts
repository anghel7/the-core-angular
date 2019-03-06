import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sky-cliente-item',
  templateUrl: './cliente-item.component.html',
  styleUrls: ['./cliente-item.component.css']
})
export class ClienteItemComponent implements OnInit {

  @Input() usuario: any;

  constructor() { }

  ngOnInit() {
  }

  verContenido():void{
    console.log('Usuario: ', this.usuario);
    
  }

}
