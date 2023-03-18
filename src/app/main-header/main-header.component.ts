import { Component,  OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductsService } from '../products.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit  {

  searchVal:any;
  
  form:FormGroup;

  constructor(public userSer: UsersService, public router: Router, private pdtSer: ProductsService, public formval:FormBuilder){

  }
  ngOnInit(): void {
    this.pdtSer.updateCart.subscribe({
      next: (data?:any) =>{
     
        console.log('event Emitted',data);
      
        this.getCartCount();

      //  this.pdtSer.updateCart.next('test')
      }
    })

   this.form= new FormGroup({
      foo: new FormControl("Search")
    });
    
    this.getCartCount();

    
  this.form.get('foo').valueChanges.subscribe((data:any)=>{
    this.pdtSer.shareData(data)
    console.log(data);
    console.log('value changed');
  })
  }
  cartCount = 0;
  doLogOut(){
    this.cartCount = 0;
  localStorage.clear();
  this.router.navigateByUrl('/login');
  }
  getCartCount(){
    this.pdtSer.getMyCartCount().subscribe({
      next: (data:number) =>{
        this.cartCount = data;
      }
    })
  }
};
