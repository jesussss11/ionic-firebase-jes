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

  idSelected:any; 
  show:boolean; 
  articulos = []; 
  articulo = {id:0, name:null, quantity:null, price:null}; 

  constructor(public articulosService : ArticulosService,
    public navCtrl: NavController) { 
    this.show = false;
    this.idSelected = 0;

    articulosService.getArticulos()
    .subscribe(articulos=>{this.articulos = articulos;});
  
  }


  saveArticulo(){
    if(this.idSelected != 0){
      this.articulosService.updateArticulo(this.articulo);
    }else{
      this.articulosService.saveArticulo(this.articulo);
    }
    this.clear();
  }


  selectArticulo(id){ 
    this.show = true;
    this.idSelected = id;

    let receivedArticulo:any; 

    this.articulosService.getArticulo(id)
    .subscribe(articulo=>{
      receivedArticulo = articulo;
      this.articulo = receivedArticulo;
    });
  }

  removeSelectedArticulo(){
    
    this.articulosService.removeArticulo(this.idSelected);
    this.clear();
  }
  clear(){
   
    this.show = false;
    this.idSelected = 0;
    this.articulo.name = null;
    this.articulo.id = null;
    this.articulo.quantity  = null;
    this.articulo.price =null;
  }

}    
