import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/Observable/of';
import {AngularFireList, AngularFireDatabase} from 'angularfire2/database';
  import { from } from 'rxjs';
import {map} from 'rxjs/operators';
import { Message, Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { AlertController,NavController } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { ArticulosService } from 'src/app/services/Articulos.service';

@Component({
  selector: 'app-periferico',
  templateUrl: './periferico.page.html',
  styleUrls: ['./periferico.page.scss'],
})
export class PerifericoPage  {

  idSelected:any; 
  show:boolean; 
  perifericos = []; 
  articulo = {id:0, name:null, quantity:null, price: null}; //Declaramos un objeto vacio 

  constructor(public articulosService : ArticulosService,
    public navCtrl: NavController) { 
    this.show = false;
    this.idSelected = 0;

    articulosService.getPerifericos()
    .subscribe(perifericos=>{this.perifericos = perifericos;});
  
  }

  savePeriferico(){
    if(this.idSelected != 0){//si es diferente a 0 actualizamos, sino creamos uno nuevo
      this.articulosService.updatePeriferico(this.articulo);
    }else{
      this.articulosService.savePeriferico(this.articulo);
    }
    this.clear();
  }
  selectPeriferico(id){ //selecionamos un articuloy mostramos los campos
    this.show = true;
    this.idSelected = id;//cogemos su id

    let receivedPeriferico:any; //declaramos un objeto vacio que será el que reciba la información  que seleccionamos

    this.articulosService.getPeriferico(id)//hacemos uso de la funcion de nuestro servicio
    .subscribe(articulo=>{
      receivedPeriferico = articulo;//el objeto vacio recibe la variable
      this.articulo = receivedPeriferico;//Y se lo asignamos al objeto los valores que se han retornado del servicio
    });
  }
  
  removeSelectedPeriferico(){
    //Llamamos a la funcion remove de nuestro servicio, le pasamos el idselected y se borra 
    this.articulosService.removePeriferico(this.idSelected);
    this.clear();
  }
  
  clear(){
    //inicializamos los valores de las variables una vez hecha una acción
    this.show = false;
    this.idSelected = 0;
    this.articulo.name = null;
    this.articulo.id = null;
    this.articulo.quantity  = null;
    this.articulo.price =null;
  }

}
