import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit, OnDestroy {
  isLoading = true;
  products: any[] = [];

  msg: string;

  search1: string;
  constructor(private pdtSer: ProductsService, private activeRoute: ActivatedRoute) {

  }
  public subscription: Subscription = new Subscription;
  ngOnInit(): void {
    this.pdtSer.getSearchInput$().subscribe(data => {
      console.log('list comment', data);
      this.search1 = data;
    })
    this.activeRoute.params.subscribe({
      next: (param: Params) => {
        console.log('param value', param);

        if (param['catid']) {
          this.getProductsCatWise(Number(param['catid']))
        } else {

          this.getAllProducts()
        }
      }
    })
    console.log('listproducts instance created');

  }
  getProductsCatWise(catId: number) {

    this.pdtSer.getproductsByCatWise(catId).subscribe({
      next: (data: any[]) => {
        console.log(data);
        this.products = data;
        this.isLoading = false;
      }
    })
  }
  getAllProducts() {
    this.pdtSer.getAllProducts().subscribe({
      next: (data: any[]) => {
        console.log(data);
        this.products = data;
        this.isLoading = false;
      }, error: (error: any) => {
        console.log(error);

      }
    })
  }
  addTOCart(pdtId: number, pdtPrice: number) {


    this.pdtSer.addToMyCart(pdtId, pdtPrice).subscribe({
      next: (data: string) => {
        console.log(data);

        this.msg = data;
        this.pdtSer.updateCart.next('value');

      }, error: (error: any) => {
        console.log(error);
        this.msg = 'something Went Wrong'

      }
    })
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe
    }
  }

}
