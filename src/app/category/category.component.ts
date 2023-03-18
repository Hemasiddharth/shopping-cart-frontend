import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:any[] = [];

  constructor(public pdtSer: ProductsService){}

  ngOnInit(): void {
    this.pdtSer.getAllCategories().subscribe({
      next: (data:any[])=> {
        this.categories = data;
          console.log('success', data);  
      },
      error: (error:any)=>{
        console.log('error msg ', error);
        
      },
      complete: ()=> {
        console.log('Process Done');       
      }   
    })
  }
}
