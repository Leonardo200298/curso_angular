import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  @Output() mensajeDesdeHijo = new EventEmitter<string>();

  mensaje: string = ''

  enviarMensaje(){
    this.mensajeDesdeHijo.emit(this.mensaje);
  }
}
