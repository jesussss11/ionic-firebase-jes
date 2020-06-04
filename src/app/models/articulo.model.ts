


export class ArticuloModel{
    id: number;
    nombre: String;
    precio: number;
    stock: number;
   
constructor(nombre : string){
   this.nombre = nombre;
   this.precio = 0;
   this.stock = 0;

   this.id = new Date().getTime();
}}