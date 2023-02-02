import { Component } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})
export class OperacionesComponent {
  numero1=0;
  numero2=0;

  // Valores booleanos para las operaciones
  sumar = false;
  restar =false;
  multiplicar = false;
  dividir = false;

  respuesta = "";

  restaRes: string| number = "";
  sumaSum: string| number = "";
  multiMult: string| number = "";
  divdiDiv: string| number = "";

  Enviar(){
    this.respuesta="";
    if(this.sumar){
      let suma = this.numero1 + this.numero2;
      this.sumaSum = suma;
    }else{
      this.sumaSum="";
    }if(this.restar){
      this.restaRes= this.numero1 - this.numero2;

    }else{
      this.restaRes="";
    }
    if(this.multiplicar){
      this.multiMult = this.numero1 * this.numero2;

    }else{
      this.multiMult="";
    }
    if(this.dividir){
      this.divdiDiv = this.numero1 / this.numero2;

    }else{
      this.divdiDiv="";
    }
  }


  mensajeS="";
  mensajeR="";
  mensajeM="";
  mensajeD="";

  menS=true;
}

