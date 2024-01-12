import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFamiliarService {

  hermanoGrande?:string;
  hermanoPequeno?:string;

  getHermanoGrande(){
    return this.hermanoGrande || '';
  }

  setHermanoGrande(hermano: string){
    this.hermanoGrande = hermano
  }

  getHermanoPequeno(){
    return this.hermanoPequeno || '';
  }

  setHermanoPequeno(hermano: string){
    this.hermanoPequeno = hermano
  }


  saludarHermano(hermano:string){
    console.log("Hola " + hermano);
    
  }

  preguntarPorHijo(): string{
    return '¿Como esta tu hijo?'
  }

  constructor() { }
}
