import {Injectable} from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs-compat';


@Injectable()
export class ArticulosService{
    
    constructor(public afDB : AngularFireDatabase){

    }

    public getArticulos(){
        return this.afDB.list('articulo/').valueChanges(); 
        //Esta función devolverá todos los datos que tengamos en el apartado fruits, en nuestra base de datos
    }

    public saveArticulo(articulo){
        let key = this.afDB.list('/articulo/').push(articulo).key;
        //Guardamos la fruta y obetenemos el id que firebase pone al nudulo de nuestra fruta.
        //Al guardarse sin id nuestra fruta, ahora la actualizamos con el id que firebase nos devuelve.
        articulo.id = key;
        this.afDB.database.ref('articulo/'+articulo.id).set(articulo);
       
    }


    public updateArticulo(articulo){
        //Actualizamos la fruta con el id que recibimos del objeto del parametro
        this.afDB.database.ref('articulo/'+articulo.id).set(articulo);
    }


    public getArticulo(id){
        return this.afDB.object('articulo/'+id).valueChanges();
        //Devolvera la fruta con el id que le pasamos por parametro
    }
    public removeArticulo(id){
        this.afDB.database.ref('articulo/'+id).remove();
        //Borrará la fruta con el id que le pasamos por parametro
    }




    public updateOrdenador(articulo){
        //Actualizamos la fruta con el id que recibimos del objeto del parametro
        this.afDB.database.ref('ordenador/'+articulo.id).set(articulo);
    }


    public getOrdenador(id){
        return this.afDB.object('ordenador/'+id).valueChanges();
        //Devolvera la fruta con el id que le pasamos por parametro
    }
    public removeOrdenador(id){
        this.afDB.database.ref('ordenador/'+id).remove();
        //Borrará la fruta con el id que le pasamos por parametro
    }

    public getOrdenadores(){
        return this.afDB.list('ordenador/').valueChanges(); 
        //Esta función devolverá todos los datos que tengamos en el apartado fruits, en nuestra base de datos
    }

    public saveOrdenador(articulo){
        let key = this.afDB.list('/ordenador/').push(articulo).key;
        //Guardamos la fruta y obetenemos el id que firebase pone al nudulo de nuestra fruta.
        //Al guardarse sin id nuestra fruta, ahora la actualizamos con el id que firebase nos devuelve.
        articulo.id = key;
        this.afDB.database.ref('ordenador/'+articulo.id).set(articulo);

}
public getPerifericos(){
    return this.afDB.list('periferico/').valueChanges(); 
    //Esta función devolverá todos los datos que tengamos en el apartado fruits, en nuestra base de datos
}

public savePeriferico(articulo){
    let key = this.afDB.list('/periferico/').push(articulo).key;
    //Guardamos la fruta y obetenemos el id que firebase pone al nudulo de nuestra fruta.
    //Al guardarse sin id nuestra fruta, ahora la actualizamos con el id que firebase nos devuelve.
    articulo.id = key;
    this.afDB.database.ref('periferico/'+articulo.id).set(articulo);
   
}


public updatePeriferico(articulo){
    //Actualizamos la fruta con el id que recibimos del objeto del parametro
    this.afDB.database.ref('periferico/'+articulo.id).set(articulo);
}


public getPeriferico(id){
    return this.afDB.object('periferico/'+id).valueChanges();
    //Devolvera la fruta con el id que le pasamos por parametro
}
public removePeriferico(id){
    this.afDB.database.ref('periferico/'+id).remove();
    //Borrará la fruta con el id que le pasamos por parametro
}


}