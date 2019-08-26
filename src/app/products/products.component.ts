import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  shoppingCart: any;
  constructor(private cart: CartService) { }

  ngOnInit() {
    this.cart.getAllItems().subscribe(response=> (this.shoppingCart=response));
  }
  handleDelete(id){
    this.cart.deleteItem(id).subscribe(response=> (this.shoppingCart=response));
  }
 handleEdit(product, price, id, quantity){
   console.log(product, price, id , quantity)
    this.cart.editItem(product, price, id, quantity).subscribe(response=> (this.shoppingCart=response));

  }
}
