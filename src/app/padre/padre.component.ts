import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  reciboMensaje: string = '';

  recibirMensaje($event: string){
    this.reciboMensaje = $event
  }
}
