import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CartService} from './cart.service';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from '@angular/router';
import { FormComponent } from './products/form/form.component';

const appRoutes: Routes=[];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    FormComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
