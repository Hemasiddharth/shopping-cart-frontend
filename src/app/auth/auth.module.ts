import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { AddproductsComponent } from '../Products/addproducts/addproducts.component';
import { ViewcartComponent } from '../viewcart/viewcart.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ViewcartComponent,
    AddproductsComponent,

  ],
  imports: [
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
