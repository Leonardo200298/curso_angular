import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit{

  constructor(private _servicioFamiliar: ServicioFamiliarService){}
  
  nombre?:string;

  ngOnInit(): void {
      this._servicioFamiliar.setHermanoGrande('Pedro');
      this.nombre = this._servicioFamiliar.getHermanoGrande();
  }

  reciboMensaje: string = '';

  recibirMensaje($event: string){
    this.reciboMensaje = $event
  }
}
