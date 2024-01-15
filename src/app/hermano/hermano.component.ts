import { Component, OnInit, inject } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hermano',
  templateUrl: './hermano.component.html',
  styleUrls: ['./hermano.component.css'],
})
export class HermanoComponent implements OnInit {
  nombre?: string;

 /*  constructor(private _servicioFamiliar: ServicioFamiliarService) {} */

  //la manera que utiliza angular 15
  private _servicioFamilia2 = inject(ServicioFamiliarService);

  ngOnInit(): void {
    this._servicioFamilia2.setHermanoPequeno('Gilberto');
    this.nombre = this._servicioFamilia2.getHermanoPequeno();
  }
  saludar() {
    this._servicioFamilia2.saludarHermano(this._servicioFamilia2.getHermanoGrande() || '');
  }

  preguntar() {
    console.log(this._servicioFamilia2.preguntarPorHijo());
     
  }
}
