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
  selector: 'app-ordenador',
  templateUrl: './ordenador.page.html',
  styleUrls: ['./ordenador.page.scss'],
})
export class OrdenadorPage  {

  idSelected:any; 
  show:boolean; 
  ordenadores = []; 
  articulo = {id:0, name:null, quantity:null, price:null}; 

  constructor(public articulosService : ArticulosService,
    public navCtrl: NavController) { 
    this.show = false;
    this.idSelected = 0;

    articulosService.getOrdenadores()
    .subscribe(ordenadores=>{this.ordenadores = ordenadores;});
  
  }
  
  saveOrdenador(){
    if(this.idSelected != 0){
      this.articulosService.updateOrdenador(this.articulo);
    }else{
      this.articulosService.saveOrdenador(this.articulo);
    }
    this.clear();
  }


  selectOrdenador(id){ 
    this.show = true;
    this.idSelected = id;

    let receivedOrdenador:any; 

    this.articulosService.getOrdenador(id)
    .subscribe(articulo=>{
      receivedOrdenador = articulo;
      this.articulo = receivedOrdenador;
    });
  }

  removeSelectedOrdenador(){
    
    this.articulosService.removeOrdenador(this.idSelected);
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
