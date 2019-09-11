import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    gasolina : number ;
   alcool : number;
   resultado : string;

  constructor() {}

    soma(){

      if( 
        ( Number(this.gasolina) - (Number(this.gasolina)*0,3) ) < Number(this.alcool)){
        this.resultado = "COMPRE GASOLINA"
      }else{
        this.resultado = "COMPRE ALCOOL"
      }
    
   }
  

}
