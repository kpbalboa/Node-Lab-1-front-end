import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import {Router} from "@angular/router"
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient, private Router: Router) {}

  getAllItems(){
    return this.http.get("http://localhost:5000/shoppingCart")
  }
  deleteItem(id){
    return this.http.delete(`http://localhost:5000/shoppingCart/${id}`)

  }
  addItem(product, price, quantity){
    // if(parentClass === 'editForm'){
    //   console.log(id)
    //  return this.http.put(`http://localhost:5000/shoppingCart/${id}`, {product, id, price, quantity})
    // }else{
    return this.http.post(`http://localhost:5000/shoppingCart`, { product, price, quantity})
  // }
}
editItem( id,product, price, quantity){
       return this.http.put(`http://localhost:5000/shoppingCart/${id}`, { id, quantity})

}
}
