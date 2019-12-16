import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase) { }

  //Obtener todos los productos.
  getProduct(){
    return this.productList=this.firebase.list('products');
  }
}
