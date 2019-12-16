import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Product} from '../models/product';
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
  //Insertar Productos
  insertProduct(product: Product){
    this.productList.push({
      name: product.name,
      category:product.category,
      location:product.location,
      price: product.price
    });
  }
    //Actualizar producto.
  updateProduct(product: Product){
    this.productList.update(product.$key,{
      name: product.name,
      category: product.category,
      location: product.location,
      price: product.price
    });
  }

  deleteProduct($key :string){
    this.productList.remove($key);
  }

}
