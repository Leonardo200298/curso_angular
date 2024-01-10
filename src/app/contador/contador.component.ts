import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  contador:number= 0;
  
  incrementar(){
    this.contador++;
  }

  decrementar(){
    this.contador--;
    if (this.contador<0) {
      this.contador = 0;
    }
  }
}
