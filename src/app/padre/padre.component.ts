import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent implements OnInit {
  nombre?: string;
  fecha?: Date = new Date();
  constructor(private _servicioFamiliar: ServicioFamiliarService) {}

  ngOnInit(): void {
    this._servicioFamiliar.setHermanoGrande('Pedro');
    this.nombre = this._servicioFamiliar.getHermanoGrande();
  }
  saludar() {
    this._servicioFamiliar.saludarHermano(
      this._servicioFamiliar.getHermanoPequeno() || ''
    );
  }

  preguntar() {
    console.log(this._servicioFamiliar.preguntarPorHijo());
     
  }
  reciboMensaje: string = '';

  recibirMensaje($event: string) {
    this.reciboMensaje = $event;
  }
}
