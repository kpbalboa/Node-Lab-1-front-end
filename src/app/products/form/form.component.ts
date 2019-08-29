import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {CartService} from '../../cart.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() update= new EventEmitter <any>();

  shoppingCart: any;
  constructor(private cart: CartService) { }

  ngOnInit() {
  }
  formSubmit(product, price, quantity){
    // if(event.target.parentElement.classList.value === 'editForm'){
      this.cart.addItem(product, price, quantity).subscribe(response=> (this.shoppingCart=response));
    // }else{
    // this.cart.addItem(product, id, price, quantity, event.target.parentElement.classList.value).subscribe(response=> (this.shoppingCart=response));
    // }
    // this.cart.getAllItems().subscribe(response=> (this.shoppingCart=response));
    // window.location.reload();
    this.update.emit()
  
  }

}
