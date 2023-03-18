import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from './users.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  updateCart = new Subject();

  navigateByUrl: any;

  searchInput = new Subject<string>() ;

  getSearchInput$(): Observable<string>{
    return this.searchInput.asObservable()
  };

  shareData(data:string):void{
    return this.searchInput.next(data)
  };

  constructor(public http: HttpClient, public userSer: UsersService) { }

  getAllCategories(){
   return this.http.get<any[]>('http://localhost:3000/getcategories');
  }
  getAllProducts(){
    return this.http.get<any[]>('http://localhost:3000/listproducts')
  }
  addProducts(data: any) {
    return this.http.post<string>("http://localhost:3000/addproducts", data);
  }

  getproductsByCatWise(catId: number){
    return this.http.get<any[]>('http://localhost:3000/getpdtcatwise/'+ catId)
  }
 
  addToMyCart(pdtId:number, pdtPrice:number){
    return this.http.post<string>('http://localhost:3000/addtocart',{cartPdtId:pdtId, cartPdtPrice:pdtPrice})
  }
  getMyCartCount(){
    return this.http.get<number>('http://localhost:3000/cartcount')
  }

  getMyCartItems(){
    return this.http.get<any[]>('http://localhost:3000/mycart');
  }
  removeMyCartItems(cartId:number){
  return  this.http.delete <string>(`http://localhost:3000/removecart/${cartId}`)
  }

  updateMyCartItems(cartId:number, cartQty:number,pdtPrice: number){
    return this.http.put<string>('http://localhost:3000/updatecart', {cartId, cartPdtQty:cartQty,pdtPrice})
  }


}