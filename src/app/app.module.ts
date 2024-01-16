import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PadreComponent } from './padre/padre.component';
import { ContadorComponent } from './contador/contador.component';
import { HijoComponent } from './hijo/hijo.component';
import { FormsModule } from '@angular/forms';
import { HermanoComponent } from './hermano/hermano.component';
import { EstiloHermanosDirective } from './estilo-hermanos.directive';
import { MiPipePipe } from './mi-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    ContadorComponent,
    HijoComponent,
    HermanoComponent,
    EstiloHermanosDirective,
    MiPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
