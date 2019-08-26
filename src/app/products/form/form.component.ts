import { Component, OnInit } from '@angular/core';
import {CartService} from '../../cart.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  shoppingCart: any;
  constructor(private cart: CartService) { }

  ngOnInit() {
  }
  formSubmit(product, id, price, quantity){
    // if(event.target.parentElement.classList.value === 'editForm'){
    //   console.log(event.target)
    //   this.cart.addItem(product, id, price, quantity, event.target.parentElement.classList.value).subscribe(response=> (this.shoppingCart=response));
    // }else{
    // this.cart.addItem(product, id, price, quantity, event.target.parentElement.classList.value).subscribe(response=> (this.shoppingCart=response));
    // }
  }

}
