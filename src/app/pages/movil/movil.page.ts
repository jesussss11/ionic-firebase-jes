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
  selector: 'app-movil',
  templateUrl: './movil.page.html',
  styleUrls: ['./movil.page.scss'],
})
export class MovilPage  {

  idSelected:any; //Esta variable se cargará cuando elijamos una fruta, así controlamos si es una fruta nueva o para actualizar
  show:boolean; //Esta variable contralará cuando queremos que se muestren los campos para introducir o actualizar una fruta
  articulos = []; //Array donde cargaremos las frutas que hay en la base de datos y las mostraremos en nuestra page
  articulo = {id:0, name:null, quantity:null}; //Declaramos un objeto vacio de fruta

  constructor(public articulosService : ArticulosService,
    public navCtrl: NavController) { 
    this.show = false;
    this.idSelected = 0;

    articulosService.getArticulos()
    .subscribe(articulos=>{this.articulos = articulos;});
  
  }


  saveArticulo(){
    if(this.idSelected != 0){//si es diferente a 0 actualizamos, sino creamos uno nuevo
      this.articulosService.updateArticulo(this.articulo);
    }else{
      this.articulosService.saveArticulo(this.articulo);
    }
    this.clear();
  }


  selectArticulo(id){ //selecionamos una fruta y mostramos los campos
    this.show = true;
    this.idSelected = id;//cogemos su id

    let receivedArticulo:any; //declaramos un objeto vacio que será el que reciba la información de la fruta que seleccionamos

    this.articulosService.getArticulo(id)//hacemos uso de la funcion getfruit de nuestro servicio
    .subscribe(articulo=>{
      receivedArticulo = articulo;//el objeto vacio recibe la variable
      this.articulo = receivedArticulo;//Y se lo asignamos al objeto fruta los valores que se han retornado del servicio
    });
  }

  removeSelectedArticulo(){
    //Llamamos a la funcion removeFruit de nuestro servicio, le pasamos el idselected y se borra esa fruta
    this.articulosService.removeArticulo(this.idSelected);
    this.clear();
  }
  clear(){
    //inicializamos los valores de las variables una vez hecha una acción
    this.show = false;
    this.idSelected = 0;
    this.articulo.name = null;
    this.articulo.id = null;
    this.articulo.quantity  = null;
  }

}    
